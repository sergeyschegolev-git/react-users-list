import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/users';

export const AddUser = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const inputHandler = useCallback((event) => {
    setUser(event.target.value);
  }, []);

  const addUserHandler = useCallback((event) => {
    event.preventDefault();

    dispatch(addUser.request(user));
  }, [dispatch, user]);

  return (
    <form data-testid="form" onSubmit={addUserHandler}>
      <input data-testid="newName" type="text" onChange={inputHandler} value={user} />
      <button type="submit">Add user</button>
    </form>
  )
}