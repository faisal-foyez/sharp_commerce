import { DividerColorVariant, DividerSizeVariant, DividerVariant } from '@dsc/foundation/lib';

export type DividerColorVariant = typeof DividerColorVariant;
export type DividerSizeVariant = typeof DividerSizeVariant;
export type DividerVariant = typeof DividerVariant;

interface DividerThemeInterface {
  withOutChildren: {
    base: string
    color: DividerColorVariant
    size: DividerSizeVariant
  }
  withChildren: {
    base: string
    textColor: DividerColorVariant
    size: {
      start: DividerSizeVariant
      center: DividerSizeVariant
      end: DividerSizeVariant
    }
    color: {
      start: DividerColorVariant
      center: DividerColorVariant
      end: DividerColorVariant
    }
    variant: DividerVariant
  }
}

export const dividerTheme: DividerThemeInterface = {
  withOutChildren: {
    base: 'dsc-divider-without-children-base',
    color: {
      primary: 'dsc-divider-without-children-primary',
      secondary: 'dsc-divider-without-children-secondary',
      success: 'dsc-divider-without-children-success',
      warning: 'dsc-divider-without-children-warning',
      error: 'dsc-divider-without-children-error',
    },
    size: {
      sm: 'dsc-divider-without-children-sm',
      md: 'dsc-divider-without-children-md',
      lg: 'dsc-divider-without-children-lg',
      xl: 'dsc-divider-without-children-xl',
      '2xl': 'dsc-divider-without-children-2xl',
    },
  },
  withChildren: {
    base: 'dsc-divider-with-children-base',
    textColor: {
      primary: 'dsc-divider-with-children-primary',
      secondary: 'dsc-divider-with-children-secondary',
      success: 'dsc-divider-with-children-success',
      warning: 'dsc-divider-with-children-warning',
      error: 'dsc-divider-with-children-error',
    },
    size: {
      start: {
        sm: 'dsc-divider-with-children-start-sm',
        md: 'dsc-divider-with-children-start-md',
        lg: 'dsc-divider-with-children-start-lg',
        xl: 'dsc-divider-with-children-start-xl',
        '2xl': 'dsc-divider-with-children-start-2xl',
      },
      center: {
        sm: 'dsc-divider-with-children-center-sm',
        md: 'dsc-divider-with-children-center-md',
        lg: 'dsc-divider-with-children-center-lg',
        xl: 'dsc-divider-with-children-center-xl',
        '2xl': 'dsc-divider-with-children-center-2xl',
      },
      end: {
        sm: 'dsc-divider-with-children-end-sm',
        md: 'dsc-divider-with-children-end-md',
        lg: 'dsc-divider-with-children-end-lg',
        xl: 'dsc-divider-with-children-end-xl',
        '2xl': 'dsc-divider-with-children-end-2xl',
      },
    },
    color: {
      start: {
        primary: 'dsc-divider-with-children-start-primary',
        secondary: 'dsc-divider-with-children-start-secondary',
        success: 'dsc-divider-with-children-start-success',
        warning: 'dsc-divider-with-children-start-warning',
        error: 'dsc-divider-with-children-start-error',
      },
      center: {
        primary: 'dsc-divider-with-children-center-primary',
        secondary: 'dsc-divider-with-children-center-secondary',
        success: 'dsc-divider-with-children-center-success',
        warning: 'dsc-divider-with-children-center-warning',
        error: 'dsc-divider-with-children-center-error',
      },
      end: {
        primary: 'dsc-divider-with-children-end-primary',
        secondary: 'dsc-divider-with-children-end-secondary',
        success: 'dsc-divider-with-children-end-success',
        warning: 'dsc-divider-with-children-end-warning',
        error: 'dsc-divider-with-children-end-error',
      },
    },
    variant: {
      start: 'dsc-divider-with-children-start',
      end: 'dsc-divider-with-children-end',
      center: 'dsc-divider-with-children-center',
    },
  },
}
