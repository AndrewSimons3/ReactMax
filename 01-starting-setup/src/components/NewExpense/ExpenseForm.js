import React from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__conrol">
        <label>Title</label>
        <input type="text" />
      </div>
    </div>
  )
}

export default ExpenseForm;