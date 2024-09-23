import React from 'react';
import { ExpenseProps } from '../../@types/expense';
import { IncomeProps } from '../../@types/income';

type BalanceProps = {
  expenses: ExpenseProps[];
  incomes: IncomeProps[];
};

const Balance = ({ expenses, incomes }: BalanceProps) => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.value, 0);
    const totalIncomes = incomes.reduce((acc, income) => acc + income.value, 0);

    const balance = totalIncomes - totalExpenses;

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Saldo Total</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                R$ {balance.toFixed(2)}
            </p>
        </div>
    );
};

export default Balance;