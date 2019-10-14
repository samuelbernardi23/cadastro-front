import React, { useState } from 'react';
import './App.css';
import api from './services/api';



function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();

    const resposta = await api.post('/', {
      nome,
      email,
      idade
    });

    alert(resposta);

  }


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>nome</label>
          <input
            value={nome}
            onChange={event => setNome(event.target.value)}
            type="text"
            placeholder="Nome"></input>
          <label htmlFor="">email</label>
          <input type="text"
            value={email}
            onChange={event => setEmail(event.target.value)} />
          <label htmlFor="">idade</label>
          <input type="text"
            value={idade}
            onChange={event => setIdade(event.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
