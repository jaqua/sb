import { Meta, StoryObj } from '@storybook/react';
import InputBox, { InputBoxProps } from './InputBox';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const meta: Meta<InputBoxProps> = {
  title: 'Components/InputBox',
  component: InputBox,
};

export default meta;

// Correctly typed StoryObj for InputBoxProps
type Story = StoryObj<InputBoxProps>;

export const Primary: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Enter your name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    error: true,
    helperText: 'Username is required',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'John Doe',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Search',
    fullWidth: true,
  },
};

export const UserInteraction: Story = {
  play: async ({ canvasElement }) => {
    render(<InputBox label="Your Name" />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Hello, Storybook!');

    // Add actions to capture user interactions (optional)
    // expect(actions('onChange')).toHaveBeenCalled();
  },
};

export const UnitTest: Story = {
  args: { label: 'Email', value: 'test@example.com' },
};
