import { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverContent,
  PopoverAction,
  PopoverTitle,
  PopoverDescription,
} from '../index';
import Button from '../../../Atoms/Button/Button';
import Avatar from '../../../Molecules/Avatar/Avatar';
import { Confetti } from '@dsc/phosphor_icons';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import DscCard from '../../../../assets/dsc-card.jpg';

const meta: Meta<typeof Popover> = {
  title: 'Components/Molecules/Popover',
  component: Popover,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;  

type Story = StoryObj<typeof Popover>;

const renderPopover = () => {
  return (
    <Popover>
      <PopoverAction asChild>
        <Button>Open Popover</Button>
      </PopoverAction>
      <PopoverContent style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', backgroundColor: 'white', padding: '0px 10px', borderRadius: '10px',}}>
        <div>
          <Avatar type="placeholder" size="medium" />
        </div>
        <div>
          <PopoverTitle>Keep Designer</PopoverTitle>
          <PopoverDescription>keepdesign@email.com</PopoverDescription>
        </div>
        <Button variant="border" color="primary">Follow</Button>
      </PopoverContent>
    </Popover>
  );
};

export const Default: Story = {
  args: {},
  render: renderPopover,
};


export const CardPopover: Story = {
  args: {},
  render: (args) => {
    return (
      <Popover>
      <PopoverAction asChild>
        <Button>Card Popover</Button>
      </PopoverAction>
      <PopoverContent className="max-w-[300px] bg-white dark:bg-metal-900">
        <img src={DscCard} className="rounded-t-xl" alt="image" style={{width:350, height:150}} />
        <div className="space-y-3 p-5">
          <PopoverTitle>Keep Design System</PopoverTitle>
          <PopoverDescription>
            You can customize the styles and behavior of this component according to your requirements.
          </PopoverDescription>
          <Button>Learn More</Button>
        </div>
      </PopoverContent>
    </Popover>
    );
  },
};

export const IconPopover: Story = {
  args: {},
  render: (args) => {
    return (
      <Popover>
        <PopoverAction asChild>
          <Button>Icon Popover</Button>
        </PopoverAction>
      <PopoverContent style={{zIndex: 20, maxWidth: '300px', borderRadius: '10px', backgroundColor: 'white', padding: '10px', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)'}} className="z-20 max-w-xs rounded-xl bg-white p-6 dark:border-metal-800 dark:bg-metal-900 shadow-sm">
        <div style={{width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: 'var(--metal-50)', color: 'gray'}} className="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
          <Confetti size={24} weight="fill" />
        </div>
        <div style={{paddingTop: '10px'}} className="space-y-2 pt-4">
          <PopoverTitle style={{fontSize: '14px', fontWeight: '600'}} className="text-body-2 font-semibold">Keep Design System</PopoverTitle>
          <PopoverDescription style={{fontSize: '14px', fontWeight: '400'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since
          </PopoverDescription>
        </div>
        <p style={{marginTop: '10px', fontSize: '14px', fontWeight: '400'}} className="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">Step - 1 / 5</p>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '10px'}} className="flex items-center justify-between gap-5 pt-6">
          <Button variant="border" color="primary" style={{width: '45%'}}>
            Skip
          </Button>
          <Button variant="border" color="primary" style={{width: '45%'}}>Next</Button>
        </div>
      </PopoverContent>
    </Popover>
    );
  },
};
