import React, { useState, useEffect } from 'react';

import api from '../../services/api';

export default function Dashboard({ history }) {
    const [valor, setValor] = useState('');

    useEffect(() => {
        const _id = localStorage.getItem("_id");;
        console.log(_id);
        if (_id === undefined || _id === null) {
            return history.push('/');
        }

        async function verificacao() {
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