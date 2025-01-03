import { Meta, StoryObj } from '@storybook/react'
import {
  Carousel,
  CarouselSlides,
  CarouselItem,
  CarouselControl,
  CarouselButtons,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselIndicators,
} from '../index'
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Molecules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
}

export default meta

export const Default: StoryObj<typeof Carousel> = {
  args: {},
  render: (args) => (
    <Carousel style={{width: '400px', maxWidth: '400px'}}>
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide}>
            <div style={{display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px solid gray', backgroundColor: 'gray'}} className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
              <h1 style={{fontSize: '20px', fontWeight: 'bold', color: 'black'}}>{slide}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  ),
}

export const CarouselWithLoop: StoryObj<typeof Carousel> = {
  args: {
    options: { loop: true },
  },
  render: (args) => {
    return (
      <Carousel {...args} options={{ loop: true }} style={{width: '400px', maxWidth: '400px'}}>
      <CarouselSlides>
        {[1, 2, 3, 4, 5].map((slide) => (
          <CarouselItem key={slide}>
            <div style={{display: 'flex', height: '300px', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px solid gray', backgroundColor: 'gray'}} className="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
              <h1 style={{fontSize: '20px', fontWeight: 'bold', color: 'black'}}>{slide}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
    )
  }
}

export const CarouselWithSlideScroll: StoryObj<typeof Carousel> = {
  args: {
    options: { loop: true, slidesToScroll: 'auto' },
  },
  render: (args) => {
    return (
      <Carousel {...args} options={{ slidesToScroll: 2 }} style={{width: '600px', maxWidth: '600px'}}>
        <CarouselSlides className="flex">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slide) => (
            <CarouselItem key={slide} style={{display: 'flex', flex: '0 0 50%'}} className="flex-[0_0_50%]">
              <div style={{display: 'flex', height: '300px', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: '10px',  backgroundColor: '#d3d3d3'}} >
                <h1 style={{fontSize: '20px', fontWeight: 'bold', color: 'black'}}>{slide}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <CarouselControl>
          <CarouselButtons>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
          <CarouselIndicators />
        </CarouselControl>
      </Carousel>
    )
  }
}
