import React, { useState, useEffect } from 'react'
import { ExpenseProps } from '../../../@types/expense';

type ExpenseListProps = {
    getExpenses: ExpenseProps[]
    setExpenses: (expenses: ExpenseProps[])=>void
}

const ExpenseList = ({getExpenses, setExpenses}: ExpenseListProps)=>{

    const[editingExpense, setEditingExpense] = useState<ExpenseProps | null>(null);
    const [newValue,setNewValue] = useState(0);
    const [newDescription, setNewDescription]= useState('');

    useEffect(()=> {
        if(editingExpense){
            setNewValue(editingExpense.value);
            setNewDescription(editingExpense.description);
        }
    }, [editingExpense]);

    const deleteExpense = (id: number) =>{
        const updatedExpenses = getExpenses.filter((expense)=> expense.id !== id);
        setExpenses(updatedExpenses);
    };

    const startEditing = (expense: ExpenseProps)=>{
        setEditingExpense(expense);
    };

    const saveEdit=()=>{
        if(editingExpense){
            const updatedExpenses = getExpenses.map((expense)=>
                expense.id === editingExpense.id ? {...expense, value: newValue, description: newDescription }: expense
            );
            setExpenses(updatedExpenses);
            setEditingExpense(null);
            setNewValue(0);
            setNewDescription('');    
        }
    };


    return(
        <div>
            <h1>Minhas Despesas</h1>
            <ul>
                {getExpenses.map((expense)=>(
                    <li key ={expense.id}>
                        {editingExpense && editingExpense.id === expense.id ? (
                            <div style={{padding: 20}}>
                                <p>Despesa {expense.id}</p>
                                <p>Valor</p>
                                <input 
                                type="number"
                                value={newValue} 
                                onChange={(e) => setNewValue(Number(e.target.value))}
                                />
                                <p>Destino</p>
                                <input 
                                type="text"
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)} 
                                />
                                <br />
                                <button onClick={saveEdit}>Salvar</button>
                            </div>
                        ):(
                            <div style={{padding: 15}}>
                                <div >
                                <input type="checkbox"
                                onClick={()=> deleteExpense(expense.id)}
                                />
                                ID:{expense.id} R${expense.value}
                                <br />PARA:{expense.description} 
                                </div>
                                <button onClick={() => startEditing(expense)}>Editar</button>
                                <button onClick={() => deleteExpense(expense.id)}>Deletar</button>
                            </div>
                        )
                    }
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ExpenseList;