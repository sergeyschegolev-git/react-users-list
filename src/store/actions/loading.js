import { createAction } from 'redux-actions';

const prefix = 'loading';

export const toggleLoading = createAction(`${prefix}:toggle`);
