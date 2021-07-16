import { render, screen, fireEvent } from '@testing-library/react';
import { addUser } from '../../store/actions/users';
import { AddUser } from '../AddUser';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe('<AddUser />', function () {
  it('should be rendered with entered value', () => {
    const newUser = 'Alex';
    render(<AddUser />);

    fireEvent.change(screen.getByTestId('newName'), {
      target: {
        value: newUser
      }
    });

    expect(screen.getByTestId('newName').value).toBe(newUser);
  });

  it('should dispatch add user request with new user name', () => {
    const newUser = 'Alex';
    render(<AddUser />);

    fireEvent.change(screen.getByTestId('newName'), {
      target: {
        value: newUser
      }
    });

    fireEvent.submit(screen.getByTestId('form'));

    expect(mockDispatch).toHaveBeenCalledWith(addUser.request(newUser));
  });
});
