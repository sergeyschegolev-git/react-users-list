import { takeEvery, call, put } from 'redux-saga/effects';
import { addUser, fetchUsers, removeUser, setUsers } from '../store/actions/users';
import {
  fetchUsers as fetchUsersService,
  createUser,
  removeUser as removeUserService,
} from '../services/users';
import { normalizeUsers } from '../utils/normalize';

export function* addUserWorker({ payload: name }) {
  const key = yield call(createUser, { name });

  yield put(addUser.receive({ name, key }));
}

export function* fetchUsersWorker() {
  const users = yield call(fetchUsersService);

  yield put(setUsers(normalizeUsers(users)));
}

export function* removeUserWorker({ payload: key }) {
  console.log(key);
  try {
    yield call(removeUserService, key);
  } catch(e) {
    console.log('smth went wrong');
  }

  yield put(removeUser.receive(key));
}

export function* usersSagaWatcher() {
  yield takeEvery(addUser.request, addUserWorker);
  yield takeEvery(fetchUsers, fetchUsersWorker);
  yield takeEvery(removeUser.request, removeUserWorker);
}