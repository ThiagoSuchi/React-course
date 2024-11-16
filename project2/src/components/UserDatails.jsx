
const UserDatails = ({ name, age, job }) => {
  
    return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>

        {age >= 18 ? (
            <h3>{name} é maior de idade, esta apto(a) a possuir habilitação!</h3>
        ):(
            <h3>{name} ainda é de menor! Habilitação negada.</h3>
        )}

    </div>
  )
}

export default UserDatails