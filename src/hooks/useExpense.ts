import React, { useContext } from "react";
import { ExpenseService } from "../utils/api/ExpenseService";
import { ExpenseContext } from "../context/ExpenseContext";

export const useExpense=(): ExpenseService =>{
    const context: {expenseService: ExpenseService}| undefined = useContext(ExpenseContext);

    if(!context){
        throw new Error("(CULPA DO EXPENSE)Por algum motivo do destino o essa bagaça não funcionou.(No projeto to-do diz q tem algo a ver com o hook)")
    }
    return context.expenseService
}