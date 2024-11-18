import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
import '@testing-library/jest-dom';
import {MsExcel} from '@dsc/logos/lib/brand_logo/index.jsx';
import ImageTest from '../../../assets/image.jpg';
describe('Avatar', () => {
  it('should render correctly with placeholder', () => {
    const {baseElement} = render(<Avatar data-testid="avatar" type="placeholder" />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it('should render with letter', () => {
    render(<Avatar data-testid="avatar" type="letterOfName" letter="AH" />);
    expect(screen.getByTestId("avatar")).toHaveTextContent("AH");
  });

  it('should render with logo', () => {
    render(<Avatar data-testid="avatar" type="logo" logo={<MsExcel />} />);
    expect(screen.getByTestId("avatar").querySelector('.avatar-logo')).toBeInTheDocument();
  });

  it('should render with image', () => {
    render(<Avatar data-testid="avatar" type="image" image={ImageTest} />);
    expect(screen.getByTestId("avatar").querySelector('img')).toBeInTheDocument();
  });

  it('should render with shape cirlce', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" shape="circle" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-circle');
  });

  it('should render with shape square', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" shape="square" />);
    expect(screen.getByTestId('avatar')).not.toHaveClass('avatar-circle');
  });

  it('should render with size tiny', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="tiny" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-tiny');
  });

  it('should render with size xsmall', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xsmall" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-xsmall');
  });

  it('should render with size small', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="small" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-small');
  });

  it('should render with size medium', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="medium" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-medium');
  });

  it('should render with size large', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="large" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-large');
  });

  it('should render with size xlarge', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-xlarge');
  });

  it('should render with size big', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="big" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-big');
  });

  it('should render with bgColor strongGradient01', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" bgColor="strongGradient01" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-bg-color-strongGradient01');
  });

  it('should render with bgColor strongGradient02', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" bgColor="strongGradient02" />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-bg-color-strongGradient02');
  });

  it('should render with border if isBorder is true', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" isBorder={true} />);
    expect(screen.getByTestId('avatar')).toHaveClass('avatar-border-xlarge');
  });

  it('should render with border if isBorder is false', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" isBorder={false} />);
    expect(screen.getByTestId('avatar')).not.toHaveClass('avatar-border-xlarge');
  });

  it('should render with topStatus VerifiedGreen', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" topStatus="VerifiedGreen" />);
    expect(screen.getByTestId('avatar').querySelector('.package_logo_verifiedgreen')).toBeInTheDocument();
  });

  it('should render with topStatus NotificationWithNumber and number 10', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" topStatus="NotificationWithNumber" notificationNumber={10} />);
    expect(screen.getByTestId('avatar').querySelector('.avatar-top-status-notification-number')).toBeInTheDocument();
    expect(screen.getByTestId('avatar').querySelector('.avatar-top-status-notification-number')).toHaveTextContent('10');
  });

  it('should render with topStatus logo with topStatusLogo', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" topStatus="Logo" topStatusLogo={<MsExcel />} />);
    expect(screen.getByTestId('avatar').querySelector('.avatar-top-status-logo')).toBeInTheDocument();
  });

  it('should render with bottomStatus Invisible', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" bottomStatus="Invisible" />);
    expect(screen.getByTestId('avatar').querySelector('.package_logo_invisible')).toBeInTheDocument();
  });

  it('should render with bottomStatus Active', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" bottomStatus="Active" />);
    expect(screen.getByTestId('avatar').querySelector('.package_logo_active')).toBeInTheDocument();
  });

  it('should render with bottomStatus DonotDisturb', ()=>{
    render(<Avatar data-testid="avatar" type="placeholder" size="xlarge" bottomStatus="DonotDisturb" />);
    expect(screen.getByTestId('avatar').querySelector('.package_logo_donotdisturb')).toBeInTheDocument();
  });
});
