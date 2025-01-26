import { Meta, StoryObj } from '@storybook/react';
import { 
  ToastWrapper,
  toast
 } from './index';
 import Button  from '../Button';

const meta: Meta<typeof ToastWrapper> = {
  title: 'Components/Atoms/Toast',
  component: ToastWrapper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToastWrapper>;

export const Default: Story = {
  args: {
    theme: 'light',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
        <div>
          <Button onClick={() => {toast('Hello')}}>
            <p>Click me</p>
        </Button>
        <ToastWrapper {...args} />
      </div>
    </>
  ),
};

export const DarkDefault: Story = {
  args: {
    theme: 'dark',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
        <div>
          <Button onClick={() => {toast('Hello')}}>
            <p>Click me</p>
        </Button>
      </div>
    </>
  ),
};

export const ToastWithDescription: Story = {
  args: {
    theme: 'light',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
        <div>
          <Button onClick={() => {toast('Hello', {description: 'This is a description'})}}>
            <p>Click me</p>
        </Button>
      </div>
    </>
  ),
};

export const DarkToastWithDescription: Story = {
  args: {
    theme: 'dark',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
        <div>
          <Button onClick={() => {toast('Hello', {description: 'This is a description'})}}>
            <p>Click me</p>
        </Button>
      </div>
    </>
  ),
};

export const ToastWithAction: Story = {
  args: {
    theme: 'light',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
        <div>
          <Button onClick={() => {
            toast('Sharp Commerce', {
              action: {
                label: 'Action',
                onClick: () => console.log('Action!'),
               },
            })
          }}>
            <p>Click me</p>
        </Button>
      </div>
    </>
  ),
};

export const DarkToastWithAction: Story = {
  args: {
    theme: 'dark',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
        <div>
          <Button onClick={() => {
            toast('Sharp Commerce', {
              action: {
                label: 'Action',
                onClick: () => console.log('Action!'),
               },
            })
          }}>
            <p>Click me</p>
        </Button>
      </div>
    </>
  ),
};

export const ToastWithVariantColors: Story = {
  args: {
    theme: 'light',
  },
  render: (args) => (
    <>
      <ToastWrapper {...args} />
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <Button color='primary' onClick={() => toast.info('Sharp Commerce')}>Info</Button>
        <Button color='success' onClick={() => toast.success('Sharp Commerce')}>Success</Button>
        <Button color='warning' onClick={() => toast.warning('Sharp Commerce')}>Warning</Button>
        <Button color='error' onClick={() => toast.error('Sharp Commerce')}>Error</Button>
      </div>
    </>
  ),
};

export const ToastWithPromise: Story = {
  args: {
    theme: 'light',
  },
  render: (args) => {
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sharp Commerce' }), 2000))
    return (
      <>
        <ToastWrapper {...args} />
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <Button onClick={() =>
            toast.promise(promise, {
              loading: 'Loading...',
              success: (data: any) => {
                return `${data.name} toast has been added`
              },
              error: 'Error',
            })
          }>Click me</Button>
        </div>
      </>
    )
  },
};
