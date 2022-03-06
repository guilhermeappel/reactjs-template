import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from '../../components/buttons';

describe('Button', () => {
  const handleClick = jest.fn();

  const setup = () =>
    render(<Button description='Click Me' onClick={handleClick} />);

  it('shows button description', () => {
    setup();

    const button = screen.queryByText('Click Me');

    expect(button).toBeInTheDocument();
  });

  it('calls onClick prop on button click', () => {
    setup();

    const button = screen.getByText('Click Me');

    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
