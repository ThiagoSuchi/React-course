import "./MyForm.css"
import { useState } from "react";

const MyForm = ({user}) => {
  // 6 - Controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState('');

  const [role, setRole] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log('Enviando o e-mail');
    console.log(name, email, bio, role); 

    // 7 - Limpando form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}//  É um manipulador de eventos que é acionado toda vez que o valor do campo muda.
            value={name}//  Define o valor atual do campo de formulário.
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
           <span>E-mail</span>
           {/* 4 - Simplificação de manipulação de state */}
           <input 
             type="email" 
             name="email" 
             placeholder="Digite seu e-mail" 
             onChange={(e) => setEmail(e.target.value)}
             value={email}
           />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea 
            name="bio" 
            placeholder="Descrição dom usuário" 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}>
          </textarea>
        </label>
        {/* 9 - Select */}
        <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
