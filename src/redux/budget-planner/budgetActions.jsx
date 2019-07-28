import shortid from 'shortid';

import ActionTypes from './budgetActionsTypes';

export const saveBudget = value => ({
  type: ActionTypes.SAVE_BUDGET,
  payload: Number(value),
});

export const addExpense = ({ name, amount }) => {
  const expense = {
    id: shortid.generate(),
    name,
    amount: Number(amount),
  };
  return { type: ActionTypes.ADD_EXPENSE, payload: expense };
};

export const removeExpense = id => {
  return {
    type: ActionTypes.REMOVE_EXPENSE,
    payload: id,
  };
};
