import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Users } from './users'

export default {
  title: 'Components/Users',
  component: Users,
} as ComponentMeta<typeof Users>

const Template: ComponentStory<typeof Users> = (args) => <Users {...args} />

export const Default = Template.bind({})
