import { Meta, StoryObj } from '@storybook/react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
 } from '../index';
 import AvatarGroup from '../../../Molecules/AvatarGroup/AvatarGroup';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import PicOne from '../../../../assets/pic_one.jpg';
import PicTwo from '../../../../assets/pic_two.jpg';
import PicThree from '../../../../assets/pic_three.jpg';
import PicFour from '../../../../assets/pic_four.jpg';
import Button from '../../../Atoms/Button/index';
import { Label } from '@radix-ui/react-dropdown-menu';
import Input from '../../Input/Input';
import InputIcon from '../../Input/InputIcon';
import { Envelope, Lock, GoogleLogo, FacebookLogo } from '@dsc/phosphor_icons';

const meta: Meta<typeof Card> = {
  title: 'Components/Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Card>;

const renderCard = () => {
  return (
    <Card style={{width: '500px', maxWidth: '100%'}} className="max-w-md">
      <CardContent>
        <CardTitle>Keep design system</CardTitle>
        <CardDescription>
          Component design systems can help developers to be more productive by providing them with a ready-made set of
          components to use.
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export const Default: Story = {
  args: {},
  render: renderCard,
};

export const CardWithAvatar: Story = {
  args: {},
  render: (args) => {
    return (
      <Card {...args} style={{width: '400px', maxWidth: '100%'}} className="max-w-md">
        <CardContent>
          <CardTitle>Our Contributors</CardTitle>
          <CardDescription>They help us to grow up the keep react component library</CardDescription>
          <AvatarGroup 
            type='image' 
            data={[{image: PicOne}, {image: PicTwo}, {image: PicThree}, {image: PicFour}]}
            size='large'
            lastAvatarType='placeholder'
          />
        </CardContent>
      </Card>
    )
  },
};

export const CardWithProduct: Story = {
  args: {},
  render: (args) => {
    return (
      <Card>
      <CardHeader>
        <img src={PicOne} style={{height: '300px', width:'600px', objectFit: 'cover'}} className="rounded-t-xl" alt="image" />
      </CardHeader>
      <CardContent className="space-y-3">   
        <CardTitle>Lorem ipsum dolor sit</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </CardDescription>
        <Button>Buy Now</Button>
      </CardContent>
    </Card>
    )
  },
};

export const RegisterCard: Story = {
  args: {},
  render: (args) => {
    return (
      <Card {...args} style={{width: '400px', maxWidth: '100%'}} className="max-w-sm">
      <CardContent style={{margin: '12px 0'}} className="space-y-3">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>If you don&apos;t have any account then just click here</CardDescription>
        </CardHeader>
        <div style={{display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'space-between', alignItems: 'center'}} className="flex items-center justify-between gap-3">
          <Button variant="border" color="secondary" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <GoogleLogo size={20} style={{marginRight: '12px'}} />
            Google
          </Button>
          <Button variant="border" color="secondary" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <FacebookLogo size={20} style={{marginRight: '12px'}} />
            Facebook
          </Button>
        </div>
        {/* <Divider>Or</Divider> */}
        <div style={{margin:'20px 0'}}></div>
        <form style={{display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between', alignItems: 'center'}} className="space-y-2">
          <fieldset style={{margin:0, padding:0, border:'none', width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between', alignItems: 'flex-start'}} className="space-y-1">
            <Label>Email*</Label>
            <div style={{position: 'relative', width: '100%'}} className="relative">
              <Input onChange={() => {}} id="email" type="email" placeholder="Enter email" style={{paddingLeft: '40px', width: '100%'}} className="ps-11" />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset style={{margin:0, padding:0,width: '100%', border:'none', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between', alignItems: 'flex-start'}} className="space-y-1">
            <Label>Password*</Label>
            <div style={{position: 'relative', width: '100%'}} className="relative">
              <Input onChange={() => {}} id="password" placeholder="Enter password" type="password" style={{paddingLeft: '40px', width: '100%'}} className="ps-11" />
              <InputIcon>
                <Lock size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <Button type="submit" style={{width: '100%', marginTop: '12px !important', display: 'block', justifyContent: 'center', alignItems: 'center'}} >
            Create Account
          </Button>
        </form>
      </CardContent>
    </Card>
    )
  },
}