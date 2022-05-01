import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <h2>April Expenses</h2>
      <div className='expense-item__description'>
        <h2>Bike Expenses</h2>
        <div className='expense-item__price'>Rs. 10000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
