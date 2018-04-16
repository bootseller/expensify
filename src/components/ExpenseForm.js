import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? props.expense.amount : null,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      errorState: ''
    };
  }

  onFieldChange = (e) => {
    let { name, value } = e.target;
    if (name === 'amount') {
      value = parseFloat(value);
    }
    this.setState(() => ({ [name]: value }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.description === "" || this.state.amount === null) {
      this.setState({ errorState: 'Description and amount cannot be empty' })
    } else {
      this.setState({ errorState: '' })
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    let error = null;
    if (this.state.errorState) {
      error = (<p>{this.state.errorState}</p>)
    }
    return (
      <div>
        {error}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            name="description"
            value={this.state.description}
            onChange={this.onFieldChange}
          />
          <input
            type="number"
            placeholder="amount"
            name="amount"
            value={this.state.amount}
            onChange={this.onFieldChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            name="note"
            value={this.state.note}
            onChange={this.onFieldChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
};