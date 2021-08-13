import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'descripton default'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'Titulo Basic',
  description: 'Description Basic'
};

export const Default: Story = (args) => <Main {...args} />;
