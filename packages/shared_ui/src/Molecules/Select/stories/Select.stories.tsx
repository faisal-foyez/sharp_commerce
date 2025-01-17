import { Meta, StoryObj } from '@storybook/react';
import { 
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue
 } from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { Envelope, User } from '@dsc/phosphor_icons';

const meta: Meta<typeof Select> = {
  title: 'Components/Molecules/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{width: '20rem'}}>
      <Select>
      <SelectAction style={{width: '20rem'}}>
        <SelectValue placeholder="Select team" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="gd">Graphic Designer</SelectItem>
          <SelectItem value="ud">UX Designer </SelectItem>
          <SelectItem value="pm">Product Manager</SelectItem>
          <SelectItem value="wde">Web Designer</SelectItem>
          <SelectItem value="swe">Software Engineer</SelectItem>
          <SelectItem value="mm">Marketing Manager</SelectItem>
          <SelectItem value="wd">Web Developer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  ),
};

export const SelectWithActionIcon: Story = {
  args: {},
  render: (args) => (
    <div style={{width: '20rem'}}>
      <Select>
      <SelectAction style={{width: '20rem'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem'}}>
          <span>
            <User size={16} />
          </span>
          <SelectValue placeholder="Select team member" />
        </div>
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Member</SelectLabel>
          <SelectItem value="jd">John Doe</SelectItem>
          <SelectItem value="am">Alex Mack</SelectItem>
          <SelectItem value="gb">Gordon Brown</SelectItem>
          <SelectItem value="jc">Jimmie Crawford</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  ),
};

export const SelectWithItemIcon: Story = {
  args: {},
  render: (args) => (
    <div style={{width: '20rem'}}>
      <Select>
      <SelectAction style={{width: '20rem'}}>
        <SelectValue placeholder="Select email" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Email Address</SelectLabel>
          <SelectItem value="email1">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem'}}>
              <span>
                <Envelope size={16} />
              </span>
              <span>johnny.cooper@example.com</span>
            </div>
          </SelectItem>
          <SelectItem value="email2">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem'}}>
              <span>
                <Envelope size={16} />
              </span>
              <span>johnni.carlson@example.com</span>
            </div>
          </SelectItem>
          <SelectItem value="email3">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem'}}>
              <span>
                <Envelope size={16} />
              </span>
              <span>carolyn.ramos@example.com</span>
            </div>
          </SelectItem>
          <SelectItem value="email4">
            <div style={{display: 'flex', alignItems: 'center', gap: '0.625rem'}}>
              <span>
                <Envelope size={16} />
              </span>
              <span>jack.morris@example.com</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  ),
};