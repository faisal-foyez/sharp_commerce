import { StoryObj, Meta } from '@storybook/react';
import {
  Notification,
  NotificationContent,
  NotificationTitle,
  NotificationDescription
} from '../index';
import  Button  from '../../../Atoms/Button';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { NotificationPosition } from '@dsc/foundation/lib';
import PicOne from '../../../../assets/pic_one.jpg';
const meta: Meta<typeof Notification> = {
  title: 'Components/Molecules/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: Object.keys(NotificationPosition)
    },
    isShowClose: {
      control: 'boolean'
    },
    dismiss: {
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Notification>;


export const Default: Story = {
  args: {
    position: 'CENTER',
    isShowClose: true,
    dismiss: false
  },
  render: (args) => (
    <div style={{height: '30vh'}}>
      <Notification {...args}>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>We use cookies to ensure you get the best experience on our website. By using our website, you agree to our use of cookies. Learn more.</NotificationDescription>
        </NotificationContent>
      </Notification>

    </div>
  )
};

export const DarkDefault: Story = {
  args: {
    position: 'CENTER',
    isShowClose: true,
    dismiss: false
  },
  render: (args) => (
    <div data-theme="dark" style={{height: '30vh'}}>
      <Notification {...args}>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>We use cookies to ensure you get the best experience on our website. By using our website, you agree to our use of cookies. Learn more.</NotificationDescription>
        </NotificationContent>
      </Notification>

    </div>
  )
};

export const NotificationWithImageTopAndButtons: Story = {
  args: {
    position: 'CENTER',
    isShowClose: true,
    dismiss: false
  },
  render: (args) => (
    <div style={{height: '40vh'}}>
      <Notification {...args}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <img style={{width: '100%', height: '200px', objectFit: 'cover'}} src={PicOne} />
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>We use cookies to ensure you get the best experience on our website. By using our website, you agree to our use of cookies. Learn more.</NotificationDescription>
          </NotificationContent>

        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignSelf:'flex-end'}}>
          <Button type='primary' size='sm'>Accept</Button>
          <Button type='error' size='sm'>Reject</Button>
        </div>
      </Notification>
    </div>
  )
};

export const DarkNotificationWithImageTopAndButtons: Story = {
  args: {
    position: 'CENTER',
    isShowClose: true,
    dismiss: false
  },
  render: (args) => (
    <div data-theme="dark" style={{height: '40vh'}}>
      <Notification {...args}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <img style={{width: '100%', height: '200px', objectFit: 'cover'}} src={PicOne} />
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>We use cookies to ensure you get the best experience on our website. By using our website, you agree to our use of cookies. Learn more.</NotificationDescription>
          </NotificationContent>

        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignSelf:'flex-end'}}>
          <Button type='primary' size='sm'>Accept</Button>
          <Button type='error' size='sm'>Reject</Button>
        </div>
      </Notification>
    </div>
  )
};

export const NotificationWithImageLeftAndButtons: Story = {
  args: {
    position: 'CENTER',
    isShowClose: true,
    dismiss: false
  },
  render: (args) => (
    <div style={{height: '30vh'}}>
      <Notification {...args}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <img style={{width: '50px', height: '50px', objectFit: 'cover'}} src={PicOne} />
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>We use cookies to ensure you get the best experience on our website. By using our website, you agree to our use of cookies. Learn more.</NotificationDescription>
          </NotificationContent>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignSelf:'flex-end'}}>
          <Button type='primary' size='sm'>Accept</Button>
          <Button type='error' size='sm'>Reject</Button>
        </div>
      </Notification>
    </div>
  )
};

export const DarkNotificationWithImageLeftAndButtons: Story = {
  args: {
    position: 'CENTER',
    isShowClose: true,
    dismiss: false
  },
  render: (args) => (
    <div data-theme="dark" style={{height: '30vh'}}>
      <Notification {...args}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <img style={{width: '50px', height: '50px', objectFit: 'cover'}} src={PicOne} />
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>We use cookies to ensure you get the best experience on our website. By using our website, you agree to our use of cookies. Learn more.</NotificationDescription>
          </NotificationContent>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignSelf:'flex-end'}}>
          <Button type='primary' size='sm'>Accept</Button>
          <Button type='error' size='sm'>Reject</Button>
        </div>
      </Notification>
    </div>
  )
};
