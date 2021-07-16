import { render, screen, fireEvent } from '@testing-library/react';
import { User } from '../User';

describe('<User />', () => {
  const props = {
    user: 'Alex',
    onRemove: jest.fn(),
    id: '12323'
  };

  it('should be rendered with correct user', () => {
    render(<User {...props} />);

    const userNameElement = screen.getByText(props.user);
    expect(userNameElement).toBeInTheDocument();
  });

  it('should call onRemove with id', () => {
    render(<User {...props} />);

    fireEvent.click(screen.getByRole('button'));

    expect(props.onRemove).toHaveBeenCalledWith(props.id);
  });
});
