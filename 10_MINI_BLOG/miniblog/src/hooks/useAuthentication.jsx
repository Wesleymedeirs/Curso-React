

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";


//Inicio da criação do hook
export const useAuthentication = () => {
  //Guardar valor de erro
  const [error, setError] = useState(null);
  //Guardar valor de carregamento
  const [loading, setLoading] = useState(null);

  //cleanep - Zerar as funções já realizadas anteriomente
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth()

  // Função par ao cleanup evitar vazamento de memoria
  function checkIfIsCancelled() {
    // Se cancelled for verdadeiro já retorna e limpa
    if (cancelled) {
      return;
    }
  }


  //REGISTRAR USUÁRIO
  const createUser = async (data) => {
    //Verificar se as funções estão canceladas
    checkIfIsCancelled()

    //Inicinado o estado de carregamento na criação do usuário iniciado
    setLoading(true)
    setError(null)

    //TRATANDO POSSIVEL ERRO NO CADASTRO
    try {

      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName
      })
      //Final do carregamento
      setLoading(false)
      return user

    } catch (error) {
      //console.log(error.message)
      //console.log(typeof error.message)
      //Com let pois o valor da systemErrorMessage pode vairar durante a execução
      let systemErrorMessage

      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres.'
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'E-mail já cadastrado.'
      } else {
        systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
      }
      setLoading(false)
      setError(systemErrorMessage)
    }
  }
  //LOGOUT - SAIR
  const logout = () => {
    checkIfIsCancelled()
    signOut(auth)
  }

  //LOGIN - ENTRAR
  const login = async (data) => {
    checkIfIsCancelled()
    //iniciando o carrregamento
    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false)
    } catch (error) { 
      
      let systemErrorMessage;
      if (error.message.includes("invalid-credential")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      } 
      setError(systemErrorMessage);
      console.log(error.message);
      setLoading(false)
    }  
  }

  //Função para adicionar a variavel Cancelled true e limpar funções já executadas
  useEffect(() => {
    return () => setCancelled(true)
  }, []) //Array de dependencia vazia por não depende de numa propriedade para executar

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  }
}