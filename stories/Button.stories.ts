import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/ui-library/src/lib/button/button.component';

export default {
  title: 'Components/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Download Broadcast',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Download Broadcast',
  variant: 'secondary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: 'Download Broadcast',
  variant: 'primary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  label: 'Download Broadcast',
  variant: 'secondary',
};
