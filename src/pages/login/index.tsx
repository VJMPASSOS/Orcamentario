import React, { useState } from 'react';
import { ClientProps } from '../../@types/client';
import CreateClient from '../../components/client/createClient/createClient';
import { useClient } from '../../hooks/useClient';
import { Router, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from '../dashboard';

enum ActionPages {
    'entrar' = 'entrar',
    'cadastrar' = 'cadastrar'
};

const Login = () => {
    const clientService = useClient();
    const clients = clientService.getClients();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState<ActionPages>(ActionPages.entrar);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const renderComponentCreateClient = () => {



        return <CreateClient createClient={(newClient: ClientProps) => {
            const id: number = clients.length + 1; 
            newClient.id = id;
            clientService.set([...clients, newClient]); 
            setCurrentPage(ActionPages.entrar);
        }} />;
    };

    const [getClients, setClients] = useState<ClientProps[]>([
        { id: 1, name: 'Alice', email: 'alice@example.com', password: '123456' },
        { id: 2, name: 'Bob', email: 'bob@example.com', password: 'abcdef' },
        {id:3, name:'Lili', email: 'lili@exemplo.com', password:'lili'}
    ]);

    const renderVerification = () => {
        const client = clients.find((client: ClientProps) => client.email === email && client.password === password);
        console.log(clients);
        if (client) {
            alert(`Bem-vindo, ${client.name}!`);
            navigate('../dashboard')
        } else {
            setError('Email ou senha incorretos.');
        }
    };
    const teste = ()=>{
        return(
            navigate('../dashboard/index.tsx')
        )
    }
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={renderVerification}>Entrar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br />
            <button onClick={() => setCurrentPage(ActionPages.cadastrar)}>Registre-se</button>
            {currentPage === ActionPages.cadastrar && renderComponentCreateClient()}
        </div>
    );
};

export default Login;
