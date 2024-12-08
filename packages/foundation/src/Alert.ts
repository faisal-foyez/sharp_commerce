const AlertColor = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    error: 'error',
}

const frozenAlertColor = Object.freeze(AlertColor);

export {
  frozenAlertColor as AlertColor,
}