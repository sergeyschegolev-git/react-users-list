import { handleActions } from 'redux-actions';
import { toggleLoading } from '../actions/loading';

export const loadingReducer = handleActions({
  [toggleLoading]: (state, action) => action.payload,
}, false);
