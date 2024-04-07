import {useState, setUsers} from 'react';

const ListRender = () => {
    const [lista] = useState(["Wesley", "Wendell", "Milson","Edineide"]);

    {/*Para usar o metodo map é necessário adicionar ao useState */}
    const [users, setUsers] = useState([
        {id:1, name:'Wesley', age: 8},
        {id:2, name:'Wendell', age: 8},
        {id:3, name:'Whastenny', age:10},
    ]);
 {/**Criada função para deletar usuário aleatóriamente  */}
    const deletarAleatorio = () => {
        {/**Aqui é aicionando a varialvel um valor que será gerado entre 0 e 4 e guardando na variável */}
        const randonNum = Math.floor(Math.random() * 4);
        console.log(randonNum)

        {/*Os valores que forem diferentes do valor derado acima fica na lista */}
        setUsers((prevUsers) => {
             return prevUsers.filter((users) => randonNum !== users.id);

        });
    }

    return (
    <div>
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
{/*Criando uma linha com as informações de nome e age que é consumido do array acima pela função map */}
        <ul>
            {users.map((users) => (
                <li key={users.id}>{users.name} - {users.age}</li>
            ))}
        </ul>

    {/*Deletar um usuário da lista */}
    <button onClick={deletarAleatorio}>Deletar usuário</button>

    </div>
    );
};

export default ListRender;