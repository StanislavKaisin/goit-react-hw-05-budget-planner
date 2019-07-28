import { createStore } from 'redux';

import * as reduxDevtoolsExtension from 'redux-devtools-extension';

import rootReducer from './budget-planner/budgetReducers';

const store = createStore(
  rootReducer,
  reduxDevtoolsExtension.devToolsEnhancer(),
);

export default store;
