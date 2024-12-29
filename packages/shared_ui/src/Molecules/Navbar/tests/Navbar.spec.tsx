import { screen, render } from '@testing-library/react';
import {
  Navbar,
  NavbarContainer,
  NavbarBrand,
  NavbarList,
  NavbarItem,
  NavbarCollapseBtn,
  NavbarCollapse,
} from '../index';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  const renderNavbar = () => {
    return (
      <Navbar data-testid='navbar'>
      <NavbarContainer >
        <NavbarBrand>
          <img style={{width: '40px', height: '40px'}} alt="keep"/>
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
  it('should render', () => {
    render(renderNavbar());
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});