import Expenses from "./components/ExpenseList/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expensesData = [
    {
      id: "el",
      name: "Food",
      amount: 500,
      date: new Date(2022, 7, 15),
      LocationOfExpenditure: "Mumbai",
    },
    {
      id: "bl",
      name: "Shopping",
      amount: 5000,
      date: new Date(2022, 10, 12),
      LocationOfExpenditure: "Pune",
    },
    {
      id: "ml",
      name: "Movie",
      amount: 1000,
      date: new Date(2022, 6, 13),
      LocationOfExpenditure: "Nasik",
    },
    {
      id: "cl",
      name: "Tour",
      amount: 20000,
      date: new Date(2022, 4, 12),
      LocationOfExpenditure: "Goa",
    },
    {
      id: "dl",
      name: "voccation",
      amount: 30000,
      date: new Date(2022, 6, 12),
      LocationOfExpenditure: "Delhi",
    },
  ];

  return (
    <div>
      <NewExpense />

      {/* {expenses.map((any) => (
        <ExpenseItems data={any}></ExpenseItems>
      ))} */}
      <Expenses expenses={expensesData} />
      {/* return React.createElement('div',{},
  React.createElement(Expenses,{items:expenses})); react object code */}
    </div>
  );
}

export default App;