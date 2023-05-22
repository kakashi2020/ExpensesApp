import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expese =>{
        return expese.date.getFullYear().toString() === filteredYear; 
    });


    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses ={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
    };

export default Expenses;



//Broken code below


/*import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        };

    return (
        <Card className="expenses">
            <ExpensesFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            />
            {props.items.map(expense => (
            <ExpenseItem 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            /> 
        ))}
        </Card>
    );
}

export default Expenses;*/