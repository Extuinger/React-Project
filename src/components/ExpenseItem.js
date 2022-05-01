import './ExpenseItem.css';

// const expenseDate = new Date(2021, 2, 28);
// const expenseTitle = 'Bike Expenses';
// const expenseAmount = 'Rs 10000'


function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <h2>{props.date}</h2>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
