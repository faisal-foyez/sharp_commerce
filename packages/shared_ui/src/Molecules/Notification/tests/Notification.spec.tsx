import { screen, render, fireEvent } from '@testing-library/react';
import {
  Notification,
  NotificationContent,
  NotificationDescription,
  NotificationTitle
} from '../index';
import '@testing-library/jest-dom';
import { NotificationPosition } from '@dsc/foundation/lib';

describe('Notification', () => {

  const renderNotification = (props: any) => {
    return render(
      <Notification data-testid="notification" {...props}>
        <NotificationContent data-testid="notification-content">
          <NotificationTitle data-testid="notification-title">
            {props.title}
          </NotificationTitle>
          <NotificationDescription data-testid="notification-description">
            {props.description}
          </NotificationDescription>
        </NotificationContent>
      </Notification>
    );
  }

  it('should render', () => {
    renderNotification({
      title: 'Hello',
      description: 'World'
    });
    expect(screen.getByTestId('notification')).toBeInTheDocument();
    expect(screen.getByTestId('notification-title')).toBeInTheDocument();
    expect(screen.getByTestId('notification-description')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument(); 
  });

  it('should render with close button if isShowClose is true', () => {
    renderNotification({
      title: 'Hello',
      description: 'World',
      isShowClose: true
    });
    expect(screen.getByTestId('notification').querySelector('.notification-close')).toBeInTheDocument();
  });

  it('should not render with close button if isShowClose is false', () => {
    renderNotification({
      title: 'Hello',
      description: 'World',
      isShowClose: false
    });
    expect(screen.getByTestId('notification').querySelector('.notification-close')).not.toBeInTheDocument();
  });


  it('should dismiss notification if close button is clicked', () => {
    renderNotification({
      title: 'Hello',
      description: 'World',
      isShowClose: true
    });
    const closeButton = screen.getByTestId('notification').querySelector('.notification-close');
    if (closeButton) {
      fireEvent.click(closeButton);
    }
    expect(screen.queryByTestId('notification')).not.toBeInTheDocument();
  });


  it('should dismiss notification if dismiss is true', () => {
    renderNotification({
      title: 'Hello',
      description: 'World',
      dismiss: true
    });
    expect(screen.queryByTestId('notification')).not.toBeInTheDocument();
  });

  it('should not dismiss notification if dismiss is false', () => {
    renderNotification({
      title: 'Hello',
      description: 'World',
      dismiss: false
    });
    expect(screen.getByTestId('notification')).toBeInTheDocument();
  });

  it.each(Object.keys(NotificationPosition))('should render with position %s', (position) => {
    renderNotification({
      title: 'Hello',
      description: 'World',
      position: position
    });
    expect(screen.getByTestId('notification')).toHaveClass(`notification-${NotificationPosition[position as keyof typeof NotificationPosition]}`);
  });
});
