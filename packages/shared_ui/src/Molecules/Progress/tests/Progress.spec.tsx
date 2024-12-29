import { screen, render } from '@testing-library/react';
import { 
  CircleProgress, 
  CircleProgressLine,
  CircleProgressText
} from '../index';
import '@testing-library/jest-dom';

describe('CircleProgress', () => {
  
  const renderProgress = (args: any) => {
    return (
      <CircleProgress data-testid="circle-progress" progress={args.progress}>
        <CircleProgressLine />
        <CircleProgressText>{args.progress}%</CircleProgressText>
      </CircleProgress>
    )
  }

  it('should render', () => {
    render(renderProgress({ progress: 50 }));
    expect(screen.getByTestId('circle-progress')).toBeInTheDocument();
  });
});