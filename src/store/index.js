import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadingReducer } from './reducers/loading';
import { usersReducers } from './reducers/users';
import { usersSagaWatcher } from '../sagas/users';

const rootReducer = combineReducers({
  loading: loadingReducer,
  users: usersReducers,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(usersSagaWatcher);
