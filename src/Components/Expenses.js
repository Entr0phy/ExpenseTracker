import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter"
import Card from "./Card";
import ExpensesChart from './ExpensesChart'

export default function Expenses(props){
    const [year, setYear] = useState('2021')

    const expensesFilterClick = expensesFilter =>{
        setYear(expensesFilter)

    }
    const value = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })

    
    return(
        <Card className="expenses">
            <ExpensesFilter 
            selected = {year} 
            onExpensesFilterClick = {expensesFilterClick} 
            />
            <ExpensesChart expenses = {value} />
            <ExpensesList items = {value} />
        </Card>
        
    )
}


