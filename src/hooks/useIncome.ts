import React, { useContext } from "react";
import { IncomeService } from "../utils/api/IncomeService";
import { IncomeContext } from "../context/IncomeContext";

export const useIncome=(): IncomeService =>{
    const context: {incomeService: IncomeService}| undefined = useContext(IncomeContext);

    if(!context){
        throw new Error("(CULPA DO INCOME)Por algum motivo do destino o essa bagaça não funcionou.(No projeto to-do diz q tem algo a ver com o hook)")
    }
    return context.incomeService
}