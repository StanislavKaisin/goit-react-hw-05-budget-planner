import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

import * as budgetSelectors from '../redux/budget-planner/budgetSelectors';
import {
  saveBudget,
  addExpense,
  removeExpense,
} from '../redux/budget-planner/budgetActions';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

class App extends Component {
  saveBudget = value => {
    this.props.saveBudget(value);
  };

  addExpense = ({ name, amount }) => {
    const expense = {
      id: shortid.generate(),
      name,
      amount: Number(amount),
    };
    this.props.addExpense(expense);
  };

  removeExpense = id => {
    this.props.removeExpense(id);
  };

  render() {
    const { expenses, budget } = this.props;
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);
    return (
      <Container>
        <BudgetForm onSave={this.saveBudget} />
        <Values budget={budget} expenses={totalExpenses} balance={balance} />
        <ExpenseForm onSave={this.addExpense} />
        {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={this.removeExpense} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  budget: budgetSelectors.getBudget(state),
  expenses: budgetSelectors.getExpenses(state),
});

const mapDispatchToProps = { saveBudget, addExpense, removeExpense };

App.propTypes = {
  budget: PropTypes.number,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ),
  saveBudget: PropTypes.func,
  addExpense: PropTypes.func,
  removeExpense: PropTypes.func,
};

App.defaultProps = {
  budget: 0,
  expenses: [],
  saveBudget: () => {},
  addExpense: () => {},
  removeExpense: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
