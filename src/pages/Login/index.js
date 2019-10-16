import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) {
    localStorage.removeItem('_id');

    const [classeTitulo, setClasseTitulo] = useState('');
    const [titulo, setTitulo] = useState('Login de acesso');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();

        const resposta = await api.get('/login', {
            headers: { email, senha }
        });

        if (resposta.data.resposta != false) {
            history.push('/dashboard');
            console.log(resposta)

            const { _id } = resposta.data;

            await localStorage.setItem('_id', _id)
        } else {
            setTitulo('Usuário ou senha incorretos')
            setClasseTitulo('fracasso')
            let limpar = setTimeout(function () {
                setTitulo('Login de acesso')
                setClasseTitulo('')
            }, 3000)

        }
    }

    return (
        <>
            <h3 className={classeTitulo}>{titulo}</h3>

            <div className="containerForm">
                <form action="#0" onSubmit={handleSubmit}>

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
                    <input type="submit" value="Entrar" />
                    <a href="/cadastro">
                        <p>Quero me
                        <b> inscrever</b>
                        </p>
                    </a>
                </form>

            </div>
        </>
    );
}