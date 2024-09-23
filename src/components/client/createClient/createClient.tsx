import React, { useState, useContext, useEffect } from "react";
import { ClientProps } from "../../../@types/client";

type CreateClientProps={
  createClient: (client: ClientProps)=> void;
}

const CreateClient = ({createClient}: CreateClientProps) => {
    const [getClient, setClient] = useState<ClientProps>({ id: 0, name: '', email: '', password: '' });

    useEffect(()=>{},[getClient])
  
    return (
      <div>
        <h2>Create Client</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <p>Nome</p>
            <input
              type="text"
              placeholder="João"
              onChange={(elemento)=> setClient({...getClient,name:elemento.target.value})}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="joao@exemplo.com"
              onChange={(elemento)=> setClient({...getClient,email:elemento.target.value})}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="********"
              onChange={(elemento)=> setClient({...getClient,password:elemento.target.value})}
              required
            />
          </div>
          <button type="submit" onClick={()=> createClient(getClient)}>Registrar</button>
        </form>
      </div>
    );
  };
  
  export default CreateClient;