import {Meta, StoryObj} from '@storybook/react';
import { 
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
  SidebarDropdown,
  SidebarCollapse,
  SidebarDropdownList,
} from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { HouseLine, PresentationChart, Stack, CheckSquare, ChartPie, Users, Lifebuoy, Gear, MagnifyingGlass, PencilLine, Barcode, CaretDown, UserCircle, HourglassLow, Checks } from '@dsc/phosphor_icons';
import { Input, InputIcon } from '../../Input';
import  Avatar from '../../Avatar/Avatar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Molecules/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [withThemeDecorator]
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Sidebar>
      <SidebarBody>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{ display: 'flex', height: '36px', width: '36px', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', backgroundColor: 'green', color: '#fff', fontSize: '14px', fontWeight: '600', padding: '8px' }}>
            S
          </span>
        </a>
        <fieldset style={{ position: 'relative', border: 'none', outline: 'none' }}>
          <Input placeholder="Search" style={{ paddingLeft: '11px' }} onChange={() => {}} />
        </fieldset>
        <SidebarList>
          <SidebarItem>
            <HouseLine size={20} />
            House
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            Dashboard
          </SidebarItem>
          <SidebarItem>
            <Stack size={20} />
            Projects
          </SidebarItem>
          <SidebarItem>
            <CheckSquare size={20} />
            Tasks
          </SidebarItem>
          <SidebarItem>
            <ChartPie size={20} />
            Reporting
          </SidebarItem>
          <SidebarItem>
            <Users size={20} />
            Users
          </SidebarItem>
          <SidebarItem>
            <Lifebuoy size={20} />
            Support
          </SidebarItem>
          <SidebarItem>
            <Gear size={20} />
            Settings
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
      <SidebarFooter>
        <Avatar  type="placeholder" />
        <div>
           <p style={{ fontSize: '14px', fontWeight: '500', color: '#AFBACA' }}>Enzo Farnandez</p>
           <p style={{ fontSize: '14px', fontWeight: '400', color: '#AFBACA' }}>enzo123@gmail.com</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
};


export const SidebarWithDropdown: Story = {
  args: {},
  render: (args) => (
    <Sidebar>
      <SidebarBody>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{ display: 'flex', height: '36px', width: '36px', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', backgroundColor: 'green', color: '#fff', fontSize: '14px', fontWeight: '600', padding: '8px' }}>
            S
          </span>
        </a>

        <fieldset style={{ position: 'relative', border: 'none', outline: 'none' }}>
          <Input placeholder="Search" style={{ paddingLeft: '11px' }} onChange={() => {}} />
        </fieldset>

        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <HouseLine size={20} />
            House
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            Dashboard
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <UserCircle size={20} />
                  Account
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <PencilLine size={20} />
                  Update Info
                </SidebarItem>
                <SidebarItem>
                  <Barcode size={20} />
                  My Order
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <span>
                    <CheckSquare size={20} />
                  </span>
                  <span>Tasks</span>
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <HourglassLow size={20} />
                  In Progress
                </SidebarItem>
                <SidebarItem>
                  <Checks size={20} />
                  Completed
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>

          <SidebarItem>
            <ChartPie size={20} />
            Reporting
          </SidebarItem>
        </SidebarList>
      </SidebarBody>

      <SidebarFooter>
        <Avatar  type="placeholder" />
        <div>
           <p style={{ fontSize: '14px', fontWeight: '500', color: '#AFBACA' }}>Enzo Farnandez</p>
           <p style={{ fontSize: '14px', fontWeight: '400', color: '#AFBACA' }}>enzo123@gmail.com</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
};