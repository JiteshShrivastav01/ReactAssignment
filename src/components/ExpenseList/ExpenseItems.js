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

  /* const [name , setName] = useState(props.name)
  const updateName = () => {
    setName('Boating')
    console.log(name)
  }

  const [date , setDate] = useState(props.date)
  const updateDate = () => {
    setDate('new Date(2023,05,31)')
    console.log(date)
  }
  */

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
      {/*
      <button onClick={updateName} style={btnStyle}>Update Name</button>
  <button onClick={updateDate} style={btnStyle}>Update Date </button> */}
    </Card>
  );
}

export default ExpenseItems;