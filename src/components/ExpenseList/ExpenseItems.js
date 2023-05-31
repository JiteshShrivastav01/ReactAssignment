import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const ChangeTitle=()=>{
    console.log('Clicked !')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <ExpenseDetails
          amount={props.amount}
          LocationOfExpenditure={props.LocationOfExpenditure}
        ></ExpenseDetails>
      </div>
      <button onClick={ChangeTitle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;