import type { Meta, StoryObj } from '@storybook/react';
import { ChangePwd } from './ChangePwd';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ChangePwd> = {
  component: ChangePwd,
  title: 'ChangePwd',
};
export default meta;
type Story = StoryObj<typeof ChangePwd>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ChangePwd!/gi)).toBeTruthy();
  },
};
