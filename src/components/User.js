import { useCallback } from 'react';

export const User = ({ user, onRemove, id }) => {
  const clickHandler = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  return (
    <div>
      <span>{user}</span>
      <button onClick={clickHandler}>remove</button>
    </div>
  )
}