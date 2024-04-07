import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    //Aula 6 - Controlled inputs
    //Aula 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.nome : ''); //< Dessa forma é caso queira já apresentar um valor default no cmapo
    //const [name, setName] = useState('')
    const [email, setEmail] = useState(user ? user.email : ''); //Condicional
    const [bio, setBio] = useState(''); //Sem condicional
    const [sexo, setSexo] = useState(user ? user.sexo : ''); 
    

    const handleName = (e) => {
        setName(e.target.value)
    }
    //Esse aqui fou um modelo, porém, os odemias inputs o onChange foi na arrow funciton
    const handleSubmit = (e)=>{
        e.preventDefault()
        {/*Aula 7 - Limpando os dados */}
        setName('')
        setEmail('')
        setEndereco('')
        setBio('')
        setSexo('')
     
     console.log(name, email, endereco, bio, sexo)
     console.log('FormulárioEnviado!')
    }
    
  return (
    <div>      

        {/*Aula 5 - Envio de form */}


        {/*Aula 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"><strong>Nome:</strong></label>
                <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} value={name}/> {/**value={name} < caso tenha valor default adicionar isso */}
            </div>

        {/*Aula 2 - Label envolvendo input - Mesma coisa de cima só que envolvendo já no labal*/}   
            <label>
                <span><strong>E-mail:</strong></span>
                {/*Aula 4 - simplificando a manupulação de state*/} 
                <input type="email" name="email" placeholder='Digite o seu e-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </label>

            <label>
                <span><strong>Endereço:</strong></span>
                {/*Aula 4 - simplificando a manupulação de state*/} 
                <input type="text" name="endereco" placeholder='Digite o seu endereço' value={endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            </label>

        {/*Aula 8 - textarea */}

        <label>
            <span><strong>Bio:</strong></span>
        <textarea name="bio" placeholder='Digite a descrição da sua bio' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>

        {/*Aula 9 - Select */}
        <label>
            <span><strong>Sexo:</strong></span>
            <select name="sexo" onChange={(e) => setSexo(e.target.value)} value={sexo} > {/*Para zerar no envio é necessário colocar o value no campo pois ao ele enviar fica vazio */}
                <option value="">Selecione...</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="naoidentificado">Não identificado</option>
            </select>
        </label>

            <input type="submit" value='Enviar' className='btn-enviar'/>
        </form>
    </div>
  )
}

export default MyForm