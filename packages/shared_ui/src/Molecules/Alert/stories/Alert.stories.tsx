import { StoryObj, Meta } from '@storybook/react';
import {
  Alert,
  AlertContainer,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertLink,
  AlertDismiss
} from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { AlertColor } from '@dsc/foundation/lib';

type AlertColorType = keyof typeof AlertColor;

const meta: Meta<typeof Alert> = {
    title: 'Components/Molecules/Alert',
    component: Alert,
    decorators: [withThemeDecorator],
    tags: ['autodocs'],
    argTypes: {
      withBg: { 
        control: 'boolean'
      },
      color:{
        control: 'select',
        options: Object.values(AlertColor)
      }
    },
};

type Story = StoryObj<typeof meta>;

const renderAlert = (args: Story['args'], colors?: AlertColorType[]) => {
  // This function renders the Alert component with the provided arguments (args) and an optional array of colors.
  // If no colors are provided, it defaults to using the color specified in the args.
  // It returns a JSX element that contains a series of Alert components, each styled in a column layout.
  if(!colors || colors.length === 0) colors = [args?.color as AlertColorType];

  return(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {colors?.map((color) => (
        <Alert {...args} key={color} color={color}>
          <AlertContainer>
            <AlertIcon />
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>This is an alert</AlertDescription>
          </AlertContainer>
          <AlertContainer>
            <AlertLink href="#">Learn more</AlertLink>
            <AlertDismiss/>
          </AlertContainer>
        </Alert>
      ))}
    </div>
  )
}

export const Default: Story = {
  args: {
    color: AlertColor.primary as AlertColorType,
  },
  render: (args) => renderAlert(args)
};

export const AlertWithDifferentColors: Story = {
  args: {
  },
  render: (args) => renderAlert(args, Object.keys(AlertColor) as AlertColorType[])
};

export const AlertWithDifferentColorsWithBg: Story = {
  args: {
    withBg: true,
  },
  render: (args) => renderAlert(args, Object.keys(AlertColor) as AlertColorType[])
};

export default meta;