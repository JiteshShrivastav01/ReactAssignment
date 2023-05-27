// function ExpenseItem() {
//     return (
//         <div>
//             <div><h3>Expense Items</h3></div>
//             <div>
//                 <ul><li>Food Rs 10</li>
//                     <li>Petrol Rs 100</li>
//                     <li>Movies Rs 200</li>
//                     </ul>
//             </div>
//         </div>
//     );
// }

import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 4, 17);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const LocationOfExpenditure = "Pune"
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;