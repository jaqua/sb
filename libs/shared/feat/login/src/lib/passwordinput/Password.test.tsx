import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PasswordInput from './PasswordInput';

// Option 1 (empty object):
const { getByText } = render<PasswordInput.Props>(<PasswordInput label="Password" />, {});

// Option 2 (with RenderOptions):
import { RenderOptions } from '@testing-library/react';
const options: RenderOptions<PasswordInput.Props, HTMLElement, Container> = {};
const { getByText } = render<PasswordInput.Props>(<PasswordInput label="Password" />, options);



describe('PasswordInput component', () => {
  it('should render with label', () => {
    const { getByText } = render<PasswordInput.Props>(<PasswordInput label="Password" />);
    const label = getByText(/Password/i);
    expect(label).toBeInTheDocument();
  });

  it('should update value on user input', () => {
    const { getByLabelText } = render<PasswordInput.Props>(<PasswordInput label="Password" />);
    const input = getByLabelText(/Password/i);

    fireEvent.change(input, { target: { value: 'test123' } });

    expect(input.value).toBe('test123');
  });
})
