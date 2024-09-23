import React, { useContext } from "react";
import { ClientService } from "../utils/api/ClientService";
import { ClientContext } from "../context/ClientContext";

export const useClient=(): ClientService =>{
    const context: {clientService: ClientService}| undefined = useContext(ClientContext);

    if(!context){
        throw new Error("(CULPA DO cliente)Por algum motivo do destino o essa bagaça não funcionou.(No projeto to-do diz q tem algo a ver com o hook)")
    }
    return context.clientService
}