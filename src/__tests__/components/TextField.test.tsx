import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { TextField } from '../../components/inputs';

describe('TextField', () => {
  const handleChange = jest.fn();

  const setup = () =>
    render(
      <TextField
        label='Name'
        value=''
        onChange={handleChange}
        errorMessage='Error message'
      />
    );

  it('calls onChange prop on input change text', () => {
    setup();

    const textField = screen.getByRole<HTMLInputElement>('textbox');

    userEvent.type(textField, 'Jesse Pinkman');
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message', () => {
    setup();

    const textField = screen.getByText('Error message');

    expect(textField).toBeInTheDocument();
  });

  it('has error class', () => {
    setup();

    const textField = screen.getByRole<HTMLInputElement>('textbox');

    expect(textField).toHaveClass('.MuiOutlinedInput-root.Mui-error');
  });
});
