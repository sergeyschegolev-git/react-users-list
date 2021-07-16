import { useDispatch, useSelector } from 'react-redux';
import { User } from './User';
import { useCallback, useEffect } from 'react';
import { removeUser, fetchUsers } from '../store/actions/users';

export const UsersList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const removeUserHandler = useCallback((userKey) => {
    dispatch(removeUser.request(userKey));
  }, [dispatch]);

  return (
    <div>
      {users.length ? users.map((user) => (
        <User key={user.key} id={user.key} user={user.name} onRemove={removeUserHandler} />
      )) : (
        <p data-testid="noUsers">No users found</p>
      )}
    </div>
  )
}