import React, { useState, useEffect } from 'react'
import { IncomeProps } from '../../../@types/income';
import "../incomeList/incomeList.css";

type IncomeListProps = {
    getIncomes: IncomeProps[]
    setIncomes: (incomes: IncomeProps[])=>void
}

const IncomeList = ({getIncomes, setIncomes}: IncomeListProps)=>{

    const[editingIncome, setEditingIncome] = useState<IncomeProps | null>(null);
    const [newValue,setNewValue] = useState(0);
    const [newDescription, setNewDescription]= useState('');

    useEffect(()=> {
        if(editingIncome){
            setNewValue(editingIncome.value);
            setNewDescription(editingIncome.description);
        }
    }, [editingIncome]);

    const deleteIncome = (id: number) =>{
        const updatedIncomes = getIncomes.filter((income)=> income.id !== id);
        setIncomes(updatedIncomes);
    };

    const startEditing = (income: IncomeProps)=>{
        setEditingIncome(income);
    };

    const saveEdit=()=>{
        if(editingIncome){
            const updatedIncomes = getIncomes.map((income)=>
                income.id === editingIncome.id ? {...income, value: newValue, description: newDescription }: income
            );
            setIncomes(updatedIncomes);
            setEditingIncome(null);
            setNewValue(0);
            setNewDescription('');    
        }
    };


    return(
        <div>
            <h1>Minhas Receitas</h1>
            <ul>
                {getIncomes.map((income)=>(
                    <li key ={income.id}>
                        {editingIncome && editingIncome.id === income.id ? (
                            <div style={{padding: 20}}>
                                <p>Receita {income.id}</p>
                                <p>Valor</p>
                                <input 
                                type="number"
                                value={newValue} 
                                onChange={(e) => setNewValue(Number(e.target.value))}
                                />
                                <p>Fonte</p>
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
                                onClick={()=> deleteIncome(income.id)}
                                />
                                ID:{income.id} R${income.value}
                                <br />DE:{income.description} 
                                </div>
                                <button onClick={() => startEditing(income)}>Editar</button>
                                <button onClick={() => deleteIncome(income.id)}>Deletar</button>
                            </div>
                        )
                    }
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default IncomeList;