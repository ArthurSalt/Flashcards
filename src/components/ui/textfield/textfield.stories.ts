import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '.'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {type: 'radio'}
    }
  }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'primary text',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'secondary text',
  }
}