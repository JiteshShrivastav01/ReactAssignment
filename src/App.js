
import { useState } from "react";
import Expenses from "./components/ExpenseList/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expensesData = [
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
      date: new Date(2023, 5, 22),
    },
    {
      id: "ml",
      title: "Movie",
      amount: 1000,
      date: new Date(2023, 5, 13),
    },
    {
      id: "cl",
      title: "Tour",
      amount: 20000,
      date: new Date(2022, 5, 12),  
    }
    
  ];
  
  const [expenseList , setExpenseList] = useState(expensesData)
  const addExpenseHandler = (newExpense) =>{
    setExpenseList([...expenseList ,newExpense]);
    console.log(newExpense,"in app.js new expenses");
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
     
      {/* {expenses.map((any) => (
        <ExpenseItems data={any}></ExpenseItems>
      ))} */}
      <Expenses expenses={expenseList} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;