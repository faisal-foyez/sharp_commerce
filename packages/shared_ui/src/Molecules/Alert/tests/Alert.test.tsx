import { fireEvent, render, screen } from '@testing-library/react';
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertLink,
  AlertTitle,
  AlertDismiss,
  AlertIcon
} from '../index';
import '@testing-library/jest-dom';
import { AlertColor } from '@dsc/foundation/lib';
import { vi } from 'vitest';
import { useState } from 'react';

vi.mock('@dsc/phosphor_icons', () => {
  console.log('mocking phosphor-icons');
  return {
    ArrowUpRight: () => <div data-testid="arrow-up-right-icon" />,
    Info: () => <div data-testid="info-icon" />,
    CheckCircle: () => <div data-testid="check-circle-icon" />,
    XCircle: () => <div data-testid="x-circle-icon" />,
    X: () => <div data-testid="x-icon" />,
  };
});

describe('Alert', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderAlert = (props?: any) => {
    return render(
      <Alert data-testid="alert-testid" {...props}>
        <AlertContainer>
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>This is an alert</AlertDescription>
        </AlertContainer>
        <AlertContainer>
          <AlertLink href="#">Learn more</AlertLink>
          <AlertDismiss/>
        </AlertContainer>
      </Alert>
    );
  }

  it('renders correctly', () => {
    renderAlert();
    expect(screen.getByTestId('alert-testid')).toBeInTheDocument();
  });

  it('should render with title', () => {
    renderAlert();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should render with description', () => {
    renderAlert();
    expect(screen.getByText('This is an alert')).toBeInTheDocument();
  });

  it('should render with link and link should contain ArrowUpRight icon', () => {
    renderAlert();
    expect(screen.getByText('Learn more')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-up-right-icon')).toBeInTheDocument();
  });

  it.each(Object.keys(AlertColor))('should render with color %s', (color) => {
    renderAlert({ color });
    expect(screen.getByTestId('alert-testid')).toHaveClass(`alert-${color}`);
  });

  it('should render with icon', () => {
    renderAlert();
    expect(screen.getByTestId('alert-testid').querySelector('.alert-icon')).toBeInTheDocument();
  });

  it('should render with dismiss icon', () => {
    renderAlert();
    expect(screen.getByTestId('x-icon')).toBeInTheDocument();
  });

  it.each(
    Object.keys(AlertColor).map(color => 
      ([ color, ['primary', 'secondary', 'warning'].includes(color) 
      ? 'info-icon' 
      : color === 'success' 
        ? 'check-circle-icon'
        : 'x-circle-icon' ]))
  )('should render with color %s and correct icon', (color, iconTestId) => {
    renderAlert({ color });
    expect(screen.getByTestId(iconTestId)).toBeInTheDocument();
  });

  it('should render with with background color if withBg is true', () => {
    renderAlert({ withBg: true });
    expect(screen.getByTestId('alert-testid')).toHaveClass('alert-bg');
  });

  it('should not render with background color if withBg is false', () => {
    renderAlert({ withBg: false });
    expect(screen.getByTestId('alert-testid')).not.toHaveClass('alert-bg');
  });

  it('should not render if dismiss is true', () => {
    renderAlert({ dismiss: true });
    expect(screen.queryByTestId('alert-testid')).not.toBeInTheDocument();
  });

  it('should be removed if dismiss is clicked', () => {
    const TestComponent = () => {
      const [dismiss, setDismiss] = useState(false);
      return (
        <Alert data-testid="alert-testid" dismiss={dismiss}>
          <AlertContainer>
            <AlertIcon />
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>This is an alert</AlertDescription>
          </AlertContainer>
          <AlertContainer>
            <AlertLink href="#">Learn more</AlertLink>
            <AlertDismiss data-testid="dismiss-icon" onClick={() => setDismiss(true)}/>
          </AlertContainer>
        </Alert>
      )
    };
    render(<TestComponent />);
    fireEvent.click(screen.getByTestId('dismiss-icon'));
    expect(screen.queryByTestId('alert-testid')).not.toBeInTheDocument();
  });
});
