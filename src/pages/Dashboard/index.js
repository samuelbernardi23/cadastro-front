import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function Dashboard({ history }) {
    const [valor, setValor] = useState('');

    useEffect(() => {


        async function verificacao() {
            const _id = localStorage.getItem("_id");;

            const resposta = await api.get('/dashboard', {
                headers: { _id }
            })

            setValor(resposta.data);
            console.log(resposta);

        }
        verificacao()

    }, []);
    return (
        <>
            <ul>
                <li>nome: {valor.nome}</li>
                <li>sobrenome: {valor.sobreNome}</li>
                <li>email: {valor.email}</li>
            </ul>
        </>
    );

}