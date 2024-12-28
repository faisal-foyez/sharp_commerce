import { useState } from 'react';
import {Meta, StoryObj} from '@storybook/react';
import Button from '../../../Atoms/Button/Button';
import {withThemeDecorator} from '../../../utils/storybook/withThemeDecorator';
import {
  Users,
  Phone,
  ChartPieSlice,
  Pen,
  Copy,
  UserCircle,
  SignOut,
  Globe,
  Gear,
} from '@dsc/phosphor_icons';
import {
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownCheckboxItem, 
  DropdownContent,
  DropdownDivider,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubAction,
  DropdownSubContent,
} from '../index';

export default {
  title: 'Components/Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  decorators:[withThemeDecorator]
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const renderDropdown = (args?: any) => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Select a framework</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownLabel>Select a framework</DropdownLabel>
        <DropdownArrow />
        <DropdownCheckboxItem checked={false} onCheckedChange={() => {}}>
          ReactJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={false} onCheckedChange={() => {}}>
          VueJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={false} onCheckedChange={() => {}}>
          AngularJS
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
  );
};

export const Default: Story = {
  args: {
  },
  render: renderDropdown,
};

export const DropdownWithIcon: Story = {
  args: {
  },
  render: (args) => {
    return (
      <Dropdown>
        <DropdownAction asChild>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownArrow />
          <DropdownGroup>
            <DropdownItem>
              <Users size={20} />
              Contacts
            </DropdownItem>
            <DropdownItem>
              <Phone size={20} />
              Phone
            </DropdownItem>
            <DropdownItem>
              <ChartPieSlice size={20} />
              Statistics
            </DropdownItem>
          </DropdownGroup>
          <DropdownDivider />
          <DropdownGroup>
            <DropdownItem>
              <Pen size={20} />
              Rename
            </DropdownItem>
            <DropdownItem>
              <Copy size={20} />
              Duplicate
            </DropdownItem>
          </DropdownGroup>
          <DropdownDivider />
          <DropdownGroup>
            <DropdownItem>
              <UserCircle size={20} />
              Account
            </DropdownItem>
            <DropdownItem>
              <SignOut size={20} />
              Logout
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
    )
  },
};

export const DropdownWithSubmenu: Story = {
  args: {
  },
  render: (args) => {
    return (
      <Dropdown>
      <DropdownAction asChild>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownArrow />
        <DropdownGroup>
          <DropdownItem>
            <Users size={20} />
            Profile
          </DropdownItem>
          <DropdownSub>
            <DropdownSubAction>
              <p className="flex items-center gap-2 text-body-4 font-medium ">
                <Globe size={20} />
                Language
              </p>
            </DropdownSubAction>
            <DropdownSubContent>
              <DropdownItem>Bangla</DropdownItem>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
              <DropdownItem>French</DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownItem>
            <Gear size={20} />
            Settings
          </DropdownItem>
          <DropdownItem>
            <SignOut size={20} />
            Logout
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
    )
  },
};

export const DropdownWithCheckbox: Story = {
  args: {
  },
  render: (args) => {
    const [selectReact, setSelectReact] = useState(false);
    const [selectVue, setSelectVue] = useState(false);
    const [selectAngular, setSelectAngular] = useState(false);
    return (
      <Dropdown>
      <DropdownAction asChild>
        <Button>Select a framework</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownLabel>Select a framework</DropdownLabel>
        <DropdownArrow />
        <DropdownCheckboxItem checked={selectReact} onCheckedChange={setSelectReact}>
          ReactJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={selectVue} onCheckedChange={setSelectVue}>
          VueJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={selectAngular} onCheckedChange={setSelectAngular}>
          AngularJS
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
    )
  },
};

export const DropdownWithRadio: Story = {
  args: {
  },
  render: (args) => {
    const [role, setRole] = useState('Software Developer');
    return (
      <Dropdown>
      <DropdownAction asChild>
        <Button>Choose a role</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownLabel>Select a role</DropdownLabel>
        <DropdownArrow />
        <DropdownRadioGroup value={role} onValueChange={setRole}>
          <DropdownRadioItem value="Software Developer">Software Developer</DropdownRadioItem>
          <DropdownRadioItem value="ML Engineer">ML Engineer</DropdownRadioItem>
          <DropdownRadioItem value="Data Scientist">Data Scientist</DropdownRadioItem>
          <DropdownRadioItem value="Product Manager">Product Manager</DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>
    )
  },
};