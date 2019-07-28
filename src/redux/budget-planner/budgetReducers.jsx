import { combineReducers } from 'redux';
import ActionTypes from './budgetActionsTypes';

const INITIAL_STATE = {
  budget: 0,
  expenses: [],
};

const budgetReducer = (state = INITIAL_STATE.budget, { type, payload }) => {
  switch (type) {
    case ActionTypes.SAVE_BUDGET:
      return payload;
    default:
      return state;
  }
};

const expensesReducer = (state = INITIAL_STATE.expenses, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_EXPENSE: {
      return [payload, ...state];
    }

    case ActionTypes.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload);

    default:
      return state;
  }
};

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
