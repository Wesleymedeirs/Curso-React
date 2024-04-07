import { useCallback, useEffect, useState } from "react";

// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// styles
import "./App.css";

// data
import { wordsList } from "./data/words";

//Stagios do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  //Criação das constantes que vão guardar valores e setar valores
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

 {/* console.log(words);*/}

  const pickWordAndCategory = useCallback(() => {
    // Escolher um acategoria aleatóriamente
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Escolher uma palavra alea´toriamente
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

   {/**  console.log(category, word);*/}

    return { category, word };
  }, [words]);

  // Inicio do jogo
  const startGame = useCallback(() => {
    // clear all letters
    clearLettersStates();

    // escolher uma palavra
    const { category, word } = pickWordAndCategory();

    {/*console.log(category, word);*/}

    let wordLetters = word.split("");
    //Pegar cada palavra e adicionar em minuscula
    wordLetters = wordLetters.map((letra) => letra.toLowerCase());

    // console.log(category, word);

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Processo de entrada da letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // verifique se a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // adicionar a letra utilizada e remover a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  {/*console.log(wrongLetters);*/}

  // Reinicio do jogo
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  // Limpar as letras dos states
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]); 
  };

  // verifique se os palpites terminaram

  useEffect(() => {
    if (guesses === 0) {
      // o jogo termina e reinicia todos os estados 
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // verifique a condição de vitória

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];//adcionando ao array letras unicas

    {/*console.log(uniqueLetters);
    console.log(guessedLetters);*/}

    // Condição de vitória
    if (guessedLetters.length === uniqueLetters.length) {
      // add pontos
      setScore((actualScore) => (actualScore += 100));

      // reinicie o jogo com uma nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
          retry={retry}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;