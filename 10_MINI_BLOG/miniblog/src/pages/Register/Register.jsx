import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {

  //States dos campos de formulários
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  
  const { createUser, error: authError, loading } = useAuthentication();

  //Para enviar os dados do formulário
   const handleSubmit = async (e) => {
    e.preventDefault()

    //Ao enviar o formulário zerar o erro
    setError('')

    const user = {
      displayName,
      email,
      password,
    }
    //Verificando se as senhas digitadas são iguais
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const res = await createUser(user)
    console.log(res)
   } 

   useEffect(() => {
    if(authError){
      setError(authError)
    }

   }, [authError]) 

  return (
    <div className={styles.register}>
     <h1>Cadastre-se para postar</h1>
     <p>Crie seu usuário e compartilhe suas histórias</p>
     <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text"  
          name='displayName'
           required 
           placeholder='Digite de usuário'
           onChange={(e) => setDisplayName(e.target.value)}
           value={displayName}
           />
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email"  
          name='email' 
          required 
          placeholder='E-mail do usuário'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input type="password"  
          name='password' 
          required placeholder='Insira sua senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
        </label>

        <label>
          <span>Confirmação de senha:</span>
          <input type="password" 
          name='confirmPassword' 
          required 
          placeholder='Confirma a sua senha'
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          />
        </label>

        {!loading && <button className='btn'> Cadastrar</button>}
        {loading && <button className='btn' disabled > Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
     </form>
    </div>
  )
}

export default Register
