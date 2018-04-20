import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { expensesTotalAmount, expensesTotalNumber } from '../selectors/expenses-total';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {`there are ${expensesTotalNumber(props.expenses)} expenses totalling ${expensesTotalAmount(props.expenses)} USD`}
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);