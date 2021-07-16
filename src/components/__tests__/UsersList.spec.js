import { render, screen, fireEvent } from '@testing-library/react';
import { UsersList } from '../UsersList';
import { fetchUsers } from '../../store/actions/users';
import * as reactRedux from 'react-redux';


describe('<UsersList />', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should fetch users', () => {
    useSelectorMock.mockReturnValue([]);
    useDispatchMock.mockReturnValue(mockDispatch);

    render(<UsersList />);

    expect(mockDispatch).toHaveBeenCalledWith(fetchUsers());
  });

  it('should render no users template', () => {
    useSelectorMock.mockReturnValue([]);
    useDispatchMock.mockReturnValue(mockDispatch);

    render(<UsersList />);

    expect(screen.getByTestId("noUsers")).toBeInTheDocument();
  });

  it('should render without no users template', () => {
    useSelectorMock.mockReturnValue([{ name: 'Alex', key: '123123' }]);
    useDispatchMock.mockReturnValue(mockDispatch);

    render(<UsersList />);

    const noUsers = screen.queryByTestId('noUsers');

    expect(noUsers).toBeNull();
  });
});
