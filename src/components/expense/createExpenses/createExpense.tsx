import React, { useEffect, useState } from 'react';
import { ExpenseProps } from '../../../@types/expense';

type CreateExpenseProps ={
createExpense: (expense:ExpenseProps)=> void;
}

const CreateExpense = ({createExpense}: CreateExpenseProps) =>{
const [getExpense, setExpense] = useState<ExpenseProps>({id:0, value:0, description:''});

useEffect(()=>{},[getExpense])

return(
    <div>
    <h2>Criando Despensa</h2>
    <p>Valor</p>
      <input
        type="number"
        placeholder="0,00"
        onChange={(number) => setExpense({ ...getExpense, value: Number(number.target.value) })}
      />
      <p>Descrição</p>
      <input
        type="text"
        placeholder='Destino do dinheiro'
        onChange={(elemento) => setExpense({ ...getExpense, description: elemento.target.value })}
      />
      <button onClick={() => createExpense(getExpense)}>Salvar Despesa</button>
      </div>
      
)
}

export default CreateExpense;