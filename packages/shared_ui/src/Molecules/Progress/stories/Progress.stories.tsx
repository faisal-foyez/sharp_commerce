import { Meta, StoryObj } from '@storybook/react';
import { 
  CircleProgress, 
  CircleProgressLine, 
  CircleProgressText,
  LineProgress,
  LineProgressBar,
  LineProgressText
} from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof CircleProgress> = {
  title: 'Components/Molecules/Progress',
  component: CircleProgress,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderProgress = (args: any) => {
  return (
    <CircleProgress progress={args.progress}>
      <CircleProgressLine />
      <CircleProgressText>{args.progress}%</CircleProgressText>
    </CircleProgress>
  );
};

export const ProgressCircle: Story = {
  args: {
    progress: 45,
  },
  render: renderProgress,
};

const lineMeta: Meta<typeof LineProgress> = {
  title: 'Components/Molecules/LineProgress',
  component: LineProgress,
  decorators: [withThemeDecorator],
};

type LineStory = StoryObj<typeof lineMeta>;


export const ProgressLine: LineStory = {
  args: {
    progress: 45,
  },
  render: (args: any) => {
    return (
      <LineProgress style={{ width: '500px' }} progress={args.progress}>
        <LineProgressBar />
        <LineProgressText>{args.progress}%</LineProgressText>
      </LineProgress>
    )
  },
};

export const CustomProgress: Story = {
  args: {
    progress: 45,
  },
  render: (args: any) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <LineProgress style={{ width: '500px' }} progress={args.progress}>
          <LineProgressBar innerColor='#ffdcda' outerColor='#ff3838' />
          <LineProgressText>95%</LineProgressText>
        </LineProgress>
        <CircleProgress progress={args.progress}>
          <CircleProgressLine innerColor='#ffdcda' outerColor='#ff3838' />
          <CircleProgressText>95%</CircleProgressText>
        </CircleProgress>
      </div>
    )
  },
};
