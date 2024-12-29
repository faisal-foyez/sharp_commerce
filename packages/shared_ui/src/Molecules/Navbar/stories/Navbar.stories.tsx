import {Meta, StoryObj} from '@storybook/react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from '../index';
import PicOne from '../../../../assets/pic_one.jpg';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { 
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
} from '../../Dropdown/index';
import Avatar from '../../Avatar/Avatar';
const meta: Meta<typeof Navbar> = {
  title: 'Components/Molecules/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const renderNavbar = () => {
  return (
    <Navbar style={{width: '700px'}}>
      <NavbarContainer >
        <NavbarBrand>
          <img style={{width: '40px', height: '40px'}} src={PicOne} alt="keep"/>
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem active>Get Started</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem active>Get Started</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export const Default: Story = {
  args: {},
  render: renderNavbar,
};

export const NavbarLayout2: Story = {
  args: {},
  render: (args) => {
    return (
      <Navbar style={{width: '900px'}}>
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
        <NavbarBrand>
          <img style={{width: '40px', height: '40px'}} src={PicOne} alt="keep" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Figma</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
    );
  },
};

export const NavbarLayout3: Story = {
  args: {},
  render: (args) => {
    return (
      <Navbar style={{width: '800px'}}>
      <NavbarContainer>
        <NavbarBrand>
          <img style={{width: '40px', height: '40px'}} src={PicOne} alt="DSC" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
        <NavbarList>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
    );
  },
};

export const NavbarLayout4: Story = {
  args: {},
  render: (args) => {
    return (
      <Navbar style={{width: '800px'}}>
      <NavbarContainer>
        <NavbarBrand>
          <img style={{width: '40px', height: '40px'}} src={PicOne} alt="keep" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarList>
        <NavbarList>
          <Dropdown>
            <DropdownAction asChild>
              <button style={{border: 'none', background: 'none', outline: 'none'}}><Avatar type='placeholder' /></button>
            </DropdownAction>
            <DropdownContent align="end" className="border border-metal-100 dark:border-metal-800">
              <DropdownItem>Statistics</DropdownItem>
              <DropdownItem>Duplicate</DropdownItem>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
    );
  },
};