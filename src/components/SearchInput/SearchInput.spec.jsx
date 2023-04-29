import React from 'react';
import { SearchInput } from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<SearchInput />', () => {
  it('should call renderChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput onChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    const value = 'o valor';
    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<SearchInput onChange={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
