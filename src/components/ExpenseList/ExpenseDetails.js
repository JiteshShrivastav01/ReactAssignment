const ExpenseDetails = (props) => {
  const style={color:'white' , weight:700, fontSize:'20px', marginRight:'140px'}
  return (
    <>
    <div style={style}>
      {props.LocationOfExpenditure}</div>
      <div className="expense-item__price">Rs {props.amount}</div>
    </>
  );
}
export default ExpenseDetails;  