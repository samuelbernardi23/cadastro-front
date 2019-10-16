import React, { useState } from 'react';

import api from '../../services/api';


export default function Login({history}) {
    const [nome, setNome] = useState('');
    const [sobreNome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [teste, setTeste] = useState('Cadastro de usuários');
    const [respostaCadastro, setRespostaCadastro] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        let resposta = await api.post('/cadastrarMembro', {
            nome, sobreNome, email, senha
        });

        console.log(resposta);
        if (resposta.data.resposta === "fracasso") {
            setTeste('E-mail já está cadastrado!');
            setRespostaCadastro('fracasso');
            let limpar = setTimeout(function () {
                setEmail('');
                setTeste('Cadastro de usuários');
                setRespostaCadastro('')
            }, 3000)
        } else {
            setTeste('Cadastrado com sucesso!');
            setRespostaCadastro('sucesso');
            let encaminhar = setTimeout(function () {
                history.push('/')
            }, 3000)

        }
    }
    return (
        <div className="containerForm">
            <form action="#0" onSubmit={handleSubmit}>

                <h3 className={respostaCadastro}>{teste}</h3>

                <div>
                    <input type="text" id="first_name"
                        value={nome} onChange={event => setNome(event.target.value)} required placeholder=" " />
                    <label htmlFor="first_name">Nome</label>
                </div>

                <div>
                    <input type="text" id="last_name"
                        value={sobreNome} onChange={event => setSobrenome(event.target.value)} required placeholder=" " />
                    <label htmlFor="last_name">Sobrenome</label>
                </div>

                <div>
                    <input type="email" id="email" name=""
                        value={email} onChange={event => setEmail(event.target.value)} required placeholder=" " />
                    <label htmlFor="email">E-mail</label>
                    <div className="requirements">
                        Ensira um e-mail válido.
              </div>
                </div>

                <div>
                    <input type="password" id="password" name=""
                        value={senha} onChange={event => setSenha(event.target.value)} required placeholder=" " pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" />
                    <label htmlFor="password">Senha</label>
                    <div className="requirements">
                        Sua senha deve ter pelo menos 6 caracteres e conter pelo menos uma letra maiúscula, uma minúscula e um número.
              </div>
                </div>
                <input type="submit" value="Cadastrar" />
                <a href="/">
                  <p>Voltar ao
                        <b> login</b>
                    </p>
                  </a>
            </form>
        </div>
    );
}