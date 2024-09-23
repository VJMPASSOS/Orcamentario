import React, { useEffect, useState } from 'react';
import { IncomeProps } from '../../../@types/income';
import "../createIncome/createIncome.css";

type CreateIncomeProps ={
createIncome: (income:IncomeProps)=> void;
}

const CreateIncome = ({createIncome}: CreateIncomeProps) =>{
const [getIncome, setIncome] = useState<IncomeProps>({id:0, value:0, description:''});

useEffect(()=>{},[getIncome])

return(
    <div>
    <h2>Criando Receitas</h2>
    <p>Valor</p>
      <input
        type="number"
        placeholder="0.00"
        onChange={(number) => setIncome({ ...getIncome, value: Number(number.target.value) })}
      />
      <p>Descrição</p>
      <input
        type="text"
        placeholder='Fonte de Renda'
        onChange={(elemento) => setIncome({ ...getIncome, description: elemento.target.value })}
      />
      <button onClick={() => createIncome(getIncome)}>Salvar Receita</button>
      </div>
      
)
}

export default CreateIncome;