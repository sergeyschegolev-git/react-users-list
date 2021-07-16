import { usersReducers, initialState } from '../users';
import { setUsers } from '../../actions/users';

describe('usersReducers', function () {
  it('should set users', () => {
    // Arrange
    const users = [
      { name: 'Alex' },
      { name: 'John' },
    ];

    // Act
    const updatedState = usersReducers(initialState, setUsers(users));

    // Assert
    expect(updatedState).toEqual(users);
  });
});
