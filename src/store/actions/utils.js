import { createAction } from 'redux-actions';

export const twoWayActions = (actionType) => ({
  receive: createAction(`${actionType}_receive`),
  request: createAction(`${actionType}_request`)
})