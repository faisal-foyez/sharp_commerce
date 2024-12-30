interface keepPaginationTheme {
  root: {
    base: string
  }
  list: {
    base: string
  }
  item: {
    base: string
    shape: {
      rounded: string
      circle: string
    }
    active: {
      on: string
      off: string
    }
  }
  goto: {
    base: string
  }
  navigator: {
    base: string
    shape: {
      rounded: string
      circle: string
    }
  }
}

export const paginationTheme: keepPaginationTheme = {
  root: {
    base: 'dsc-pagination-root',
  },
  list: {
    base: 'dsc-pagination-list',
  },
  item: {
    base: 'dsc-pagination-item',
    shape: {
      rounded: 'dsc-pagination-item-rounded',
      circle: 'dsc-pagination-item-circle',
    },
    active: {
      on: 'dsc-pagination-item-active-on',
      off: 'dsc-pagination-item-active-off',
    },
  },
  goto: {
    base: 'dsc-pagination-goto',
  },
  navigator: {
    base: 'dsc-pagination-navigator',
    shape: {
      rounded: 'dsc-pagination-navigator-rounded',
      circle: 'dsc-pagination-navigator-circle',
    },
  },
}
