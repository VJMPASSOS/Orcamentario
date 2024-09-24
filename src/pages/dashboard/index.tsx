import { useEffect, useState } from "react";
import "../../styles/dashboard.css";
import { ExpenseProps } from "../../@types/expense";
import ExpenseList from "../../components/expense/expenseList/expenseList";
import CreateExpense from "../../components/expense/createExpenses/createExpense";
import { useExpense } from "../../hooks/useExpense";
import IncomeList from "../../components/income/incomeList/incomeList";
import CreateIncome from "../../components/income/createIncome/createIncome";
import { useIncome } from "../../hooks/useIncome";
import { IncomeProps } from "../../@types/income";
import Balance from "../../components/balance/balance";

enum ActionPages {
    'escolha' = 'escolha',
    'criarD' = 'criarD',
    'listaD' = 'listaD',
    'criarR' = 'criarR',
    'listaR' = 'listaR'
}

function Dashboard() {

    const expenseService = useExpense();

    const [getExpenses, setExpenses] = useState<ExpenseProps[]>([
        { id: 1, value: 14.0, description: "X-Salada do Samuca" },
        { id: 2, value: 18.0, description: "X-Bacon do Samuca" }
    ]);



    const incomeService = useIncome();

    const [getIncomes, setIncomes] = useState<IncomeProps[]>([
        { id: 1, value: 500.0, description: "Doação do Tigrinho" }
    ]);



    const [getCurrentPage, setCurrentPage] = useState<ActionPages>(ActionPages.escolha)



    useEffect(() => {
        console.log({ getExpenses, Expense: expenseService.get() })
    }, [getExpenses])

    useEffect(() => {
        console.log({ getIncomes, Income: incomeService.get() })
    }, [getIncomes])

    const totalExpenses = getExpenses.reduce((acc, expense) => acc + expense.value, 0);
    const totalIncomes = getIncomes.reduce((acc, income) => acc + income.value, 0);
    const balance = totalIncomes - totalExpenses;
    
    const renderButtonExpenses = () => (
        <div>
            <button onClick={() => setCurrentPage(ActionPages.escolha)}>Voltar</button>
            <button onClick={() => setCurrentPage(ActionPages.criarD)}>Criar</button>
            <button onClick={() => setCurrentPage(ActionPages.listaD)}>Minhas Despesas</button>
        </div>
    )



    const renderButtonIncomes = () => (
        <div>
            <button onClick={() => setCurrentPage(ActionPages.escolha)}>Voltar</button>
            <button onClick={() => setCurrentPage(ActionPages.criarR)}>Criar Receita</button>
            <button onClick={() => setCurrentPage(ActionPages.listaR)}>Minhas Receitasas</button>
        </div>
    )



    const renderExpenseComponent = () => {
        switch (getCurrentPage) {
            case ActionPages.criarD:
                return <CreateExpense createExpense={(newExpense: ExpenseProps) => {
                    const id: number = getExpenses.length + 1
                    newExpense.id = id
                    const tmpExpenses: ExpenseProps[] = [...getExpenses, newExpense]
                    setExpenses(tmpExpenses)
                    expenseService.set(tmpExpenses)
                    setCurrentPage(ActionPages.listaD)
                }}
                />;

            case ActionPages.listaD:
                return <ExpenseList
                    getExpenses={getExpenses}
                    setExpenses={(newList: ExpenseProps[]) => setExpenses(newList)} />

            default:
                return <ExpenseList
                    getExpenses={getExpenses}
                    setExpenses={(newList: ExpenseProps[]) => setExpenses(newList)} />
        }
    }



    const renderIncomeComponent = () => {
        switch (getCurrentPage) {
            case ActionPages.criarR:
                return <CreateIncome createIncome={(newIncome: IncomeProps) => {
                    const id: number = getIncomes.length + 1
                    newIncome.id = id
                    const tmpIncomes: IncomeProps[] = [...getIncomes, newIncome]
                    setIncomes(tmpIncomes)
                    incomeService.set(tmpIncomes)
                    setCurrentPage(ActionPages.listaR)
                }}
                />;

            case ActionPages.listaR:
                return <IncomeList
                    getIncomes={getIncomes}
                    setIncomes={(newList: IncomeProps[]) => setIncomes(newList)} />

            default:
                return <IncomeList
                    getIncomes={getIncomes}
                    setIncomes={(newList: IncomeProps[]) => setIncomes(newList)} />
        }
    }



    const choiseExpense = () => {
        return (
            <div style={{ textAlign: 'center' }}>
                {renderButtonExpenses()}
                {renderExpenseComponent()}
            </div>
        )
    }



    const choiseIncome = () => {
        return (
            <div style={{ textAlign: 'center' }}>
                {renderButtonIncomes()}
                {renderIncomeComponent()}
            </div>
        )
    }


    return (  
        <div style={{ textAlign: 'center' }}>
            <h2>Saldo: R$ {balance.toFixed(2)}</h2> 
            <button onClick={() => setCurrentPage(ActionPages.criarR)}>Receita</button>
            <button onClick={() => setCurrentPage(ActionPages.criarD)}>Despesa</button>
    
            {getCurrentPage === ActionPages.criarR || getCurrentPage === ActionPages.listaR ? choiseIncome() : null}
            {getCurrentPage === ActionPages.criarD || getCurrentPage === ActionPages.listaD ? choiseExpense() : null}
        </div>
    );
}

export default Dashboard;