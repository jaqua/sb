import { Meta, StoryObj } from '@storybook/react';
import LoginButton, { LoginButtonProps } from './LoginButton';
import { action } from '@storybook/addon-actions'; // Import action for Storybook

const meta: Meta<LoginButtonProps> = {
  title: 'Components/LoginButton',
  component: LoginButton,
};

export default meta;

type Story = StoryObj<LoginButtonProps>;

export const Primary: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Submit',
  },
};

export const WithAction: Story = {
  args: {
    onClick: action('onClick'),
  },
};
