import React, {useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/ExpensesComps/Expenses';


const DUMMY_EXPENSE = [];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);


  const addExpenseHandler = expense => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];  // THE RECOMENDATION WAS return [expense, ...prevExpense]; but this keeps reseting the title to the same as previous
    });                                  //CORRECTION. NOW IT WORKED. HAD SOMETHING TO DO WITH THE USE OF () IN ExpenseForm.js I THINK. 
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;