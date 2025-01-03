export interface KeepCarouselTheme {
  carouselContainer: string
  viewport: string
  controls: {
    wrapper: string
    button: {
      container: string
      wrapper: string
      svg: string
    }
    indicators: {
      container: string
      dot: string
    }
  }
  item: {
    container: string
    slide: string
  }
}

export const carouselTheme: KeepCarouselTheme = {
  carouselContainer: 'dsc-carousel-container',
  viewport: 'dsc-carousel-viewport',
  controls: {
    wrapper: 'dsc-carousel-controls-wrapper',
    button: {
      container: 'dsc-carousel-button-container',
      wrapper:
        'dsc-carousel-button-wrapper',
      svg: 'dsc-carousel-button-svg',
    },
    indicators: {
      container: 'dsc-carousel-indicators-container',
      dot: 'dsc-carousel-indicator-dot',
    },
  },
  item: {
    container: 'dsc-carousel-item-container',
    slide: 'dsc-carousel-slide',
  },
}
