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
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div><ExpenseDate date={props.date}/></div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
