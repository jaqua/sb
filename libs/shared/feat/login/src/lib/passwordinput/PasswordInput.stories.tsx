import { Meta, StoryObj } from '@storybook/react';
import PasswordInput, { PasswordInputProps } from './PasswordInput';

const meta: Meta<PasswordInputProps> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<PasswordInputProps>;

export const Primary: Story = {
  args: {
    label: 'Password',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Password',
    value: 'secret123',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: true,
    helperText: 'Password is required',
  },
};
