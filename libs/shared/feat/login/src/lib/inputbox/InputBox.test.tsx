import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputBox, { InputBoxProps } from './InputBox'; 
describe('InputBox component', () => {
  it('should render with label', () => {
    const { getByText } = render<InputBoxProps>(<InputBox label="Username" />);
    const label = getByText(/Username/i); 
    expect(label).toBeInTheDocument();
  });

  it('should update value on user input', () => {
    const { getByRole } = render<InputBoxProps>(<InputBox label="Email" />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test@example.com' } }); 

    expect(input.value).toBe('test@example.com');
  });

  it('should render error state', () => {
    const { getByText } = render<InputBoxProps>(<InputBox label="Username" error helperText="This field is required" />);
    const errorText = getByText(/This field is required/i); 
    expect(errorText).toBeInTheDocument();
  });

});
