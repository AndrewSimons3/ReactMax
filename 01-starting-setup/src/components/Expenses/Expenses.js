import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterYearHandler = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onFilterYear={filterYearHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
