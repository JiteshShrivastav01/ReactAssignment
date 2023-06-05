
import React, { useState } from 'react';
import Expenses from "./components/ExpenseList/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "el",
    title: "Food",
    amount: 500,
    date: new Date(2023, 5, 15),
  },
  {
    id: "bl",
    title: "Shopping",
    amount: 5000,
    date: new Date(2021, 10, 12),
  },
  {
    id: "ml",
    title: "Movie",
    amount: 1000,
    date: new Date(2020, 6, 13),
  },
  {
    id: "cl",
    title: "Tour",
    amount: 20000,
    date: new Date(2022, 4, 12),
  },
  {
    id: "xl",
    title: "Dinner",
    amount: 1200,
    date: new Date(2021, 8, 12)
  },

];


const App = () => {

  const [expenses,setExpenses] = useState(dummyExpenses);
  

  const addExpenseHandler = expense => {
    console.log("In App.js");
    console.log(expense);

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;