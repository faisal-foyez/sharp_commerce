import {Meta, StoryObj} from '@storybook/react';
import { withThemeDecorator } from "../../../utils/storybook/withThemeDecorator";
import { 
  Steps, 
  StepsItem, 
  StepsPoint,
  StepsContent,
  StepsTitle,
  StepsDescription
} from "../index";

const meta: Meta<typeof Steps> = {
  title: "Components/Molecules/Steps",
  component: Steps,
  tags: ["autodocs"],
  decorators: [withThemeDecorator],
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const data = [
      {
        id: 1,
        title: 'Personal Information',
        description: 'Enter your personal details to create an account.',
        isComplete: true,
      },
      {
        id: 2,
        title: 'Verify Email',
        description: 'Check email for a verification link to confirm your account.',
        isComplete: false,
      },
      {
        id: 3,
        title: 'Setup Profile',
        description: 'Complete your profile by adding a profile picture and bio.',
        isComplete: false,
      },
    ]
    return (
      <Steps>
        {data.map((step) => (
          <StepsItem key={step.id}>
            <StepsPoint isComplete={step.isComplete} />
            <StepsContent>
              <StepsTitle>{step.title}</StepsTitle>
              <StepsDescription>{step.description}</StepsDescription>
            </StepsContent>
          </StepsItem>
        ))}
      </Steps>
    )
  }
}

export const StepsWithNumberPoint: Story = {
  render: () => {
    const data = [
      {
        id: 1,
        title: 'Personal Information',
        description: 'Enter your personal details to create an account.',
        isComplete: true,
      },
      {
        id: 2,
        title: 'Verify Email',
        description: 'Check email for a verification link to confirm your account.',
        isComplete: false,
      },
      {
        id: 3,
        title: 'Setup Profile',
        description: 'Complete your profile by adding a profile picture and bio.',
        isComplete: false,
      },
    ]
    return (
      <Steps>
        {data.map((step) => (
          <StepsItem key={step.id}>
            <StepsPoint isComplete={step.isComplete}>{step.id}</StepsPoint>
            <StepsContent>
              <StepsTitle>{step.title}</StepsTitle>
              <StepsDescription>{step.description}</StepsDescription>
            </StepsContent>
          </StepsItem>
        ))}
      </Steps>
    )
  }
}