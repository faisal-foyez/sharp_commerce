export type ProgressSizeVariant = {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface ProgressThemeInterface {
  circle: {
    root: string
    svg: {
      base: string
      circle: string
      g: string
      gCircle: string
    }
  }
  line: {
    root: string
    progress: {
      base: string
      bar: string
    }
    text: {
      base: string
    }
  }
}

export const progressTheme: ProgressThemeInterface = {
  circle: {
    root: 'dsc-progress-circle-root',
    svg: {
      base: 'dsc-progress-circle-svg-base',
      circle: 'dsc-progress-circle-svg-circle',
      g: 'dsc-progress-circle-svg-g',
      gCircle: 'dsc-progress-circle-svg-gCircle',
    },
  },
  line: {
    root: 'dsc-progress-line-root',
    progress: {
      base: 'dsc-progress-line-progress-base',
      bar: 'dsc-progress-line-progress-bar',
    },
    text: {
      base: 'dsc-progress-line-text-base',
    },
  },
}
