export const fetchUsers = async() => {
  const response = await fetch('https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/users.json');
  return response.json();
}

export const removeUser = async(key) => {
  const response = await fetch(
    `https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/users/${key}.json`, {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }

  return response.json();
}

export const createUser = async(user) => {
  const response = await fetch(
    `https://tms-todo-default-rtdb.europe-west1.firebasedatabase.app/users.json`, {
      method: 'POST',
      body: JSON.stringify(user),
    }
  );

  return response.json();
}
