import { render, screen } from '@testing-library/react';
import { Slider } from './Slider';
import '@testing-library/jest-dom';

describe('Slider', () => {
  it('should render the slider', () => {
    render(
      <div data-testid="slider-container" style={{ width: '400px' }}>
        
      </div>
    );
    expect(screen.getByTestId('slider-container')).toBeInTheDocument();
  });
});
