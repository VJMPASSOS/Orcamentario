import React, { useContext, useEffect } from "react";
import { ClientContext } from "../../../context/ClientContext";
import { ClientProps } from "../../../@types/client";

type ClientListProps ={
  getClients: ClientProps[]
  setClients: (clients:ClientProps[])=>void
}

const ClientList = ({getClients, setClients}: ClientListProps) => {
  

  
    useEffect(() => {},[getClients])

  
    return (
      <div>
        <h2>Lista de Clientes</h2>
        <ul>
          {
            getClients.map((client: ClientProps) => (
              <li key={client.id}>
                <strong>Nome:</strong> {client.name} <br />
                <strong>Email:</strong> {client.email}
              </li>
            ))
          }
        </ul>
      </div>
    );
  };
  
  export default ClientList;