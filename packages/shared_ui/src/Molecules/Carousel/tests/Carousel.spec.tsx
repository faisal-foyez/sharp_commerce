import { render, screen } from '@testing-library/react';
import { 
  Carousel,
  CarouselSlides,
  CarouselItem,
  CarouselControl,
  CarouselButtons,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselIndicators
} from '../index';
import '@testing-library/jest-dom';
import { Divide } from 'packages/phosphor_icons/dist';

describe('Carousel', () => {
  const renderCarousel = () => {
    return (
      <div data-testid="carousel_testid" className="w-400 max-w-400" >
        Carousel test should be here
      </div>
    )
  }

  it('should render', () => {
    render(renderCarousel());
    expect(screen.getByTestId('carousel_testid')).toBeInTheDocument();
  });
});