const UserDetails = ({nome, idade, job}) => {

  return (
    <div>        
        <h2>{nome}</h2>
        <p>Idade: {idade} </p>
        <p>Profissão: {job}</p>
        {idade >= 18 ? (<p>Pode tirar CNH</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails