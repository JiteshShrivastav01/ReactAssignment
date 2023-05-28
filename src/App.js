import ExpenseItem from './component/ExpensesItem';

function App() {
  const Expenses = [
    { date: new Date(2023, 5, 24), title: 'Food', amount: 200, location: 'Pune' },
    { date: new Date(2023, 5, 25), title: 'Movie', amount: 300, location: 'Mumbai' },
    { date: new Date(2023, 5, 26), title: 'Petrol', amount: 500, location: 'Goa' }
  ];
  
  const expenseItems = Expenses.map((expense, index) => (
    <ExpenseItem
      key={index}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
      location={expense.location}
    />
  ));

  return (
    <div>
      {expenseItems}
    </div>
  );
}

export default App;

