import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

import React, {useState} from 'react';

const ExpenseItems = (props) => {

  const btnStyle={width:'100px',margin:'5px',borderRadius:'10px',fonSize: '1.25rem',weight:700,
  padding:'0.5rem 1.5rem'}
  
  const [amount , setAmount] = useState(props.amount)
  const updateAmount = () => {
    setAmount('100')
    console.log(amount)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <ExpenseDetails
          amount={amount}
          LocationOfExpenditure={props.LocationOfExpenditure}
        ></ExpenseDetails>
      </div>
      <button onClick={updateAmount} style={btnStyle}>Update Expense</button>
    </Card>
  );
}

export default ExpenseItems;