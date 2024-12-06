import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
import '@testing-library/jest-dom';
import { MsExcel } from '@dsc/logos/lib/brand_logo/index.jsx';
import ImageTest from '../../../assets/image.jpg';

describe('Avatar', () => {
  const renderAvatar = (props: any) => render(<Avatar data-testid="avatar" {...props} />);

  it('should render correctly with placeholder', () => {
    const { baseElement } = renderAvatar({ type: "placeholder" });
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it('should render with letter', () => {
    renderAvatar({ type: "letterOfName", letter: "AH" });
    expect(screen.getByTestId("avatar")).toHaveTextContent("AH");
  });

  it('should render with logo', () => {
    renderAvatar({ type: "logo", logo: <MsExcel /> });
    expect(screen.getByTestId("avatar").querySelector('.avatar-logo')).toBeInTheDocument();
  });

  it('should render with image', () => {
    renderAvatar({ type: "image", image: ImageTest });
    expect(screen.getByTestId("avatar").querySelector('img')).toBeInTheDocument();
  });

  const shapeTests = [
    { shape: "circle", expectedClass: "avatar-circle" },
    { shape: "square", expectedClass: "avatar-circle", shouldNotHave: true }
  ];

  shapeTests.forEach(({ shape, expectedClass, shouldNotHave }) => {
    it(`should render with shape ${shape}`, () => {
      renderAvatar({ type: "placeholder", shape });
      if (shouldNotHave) {
        expect(screen.getByTestId('avatar')).not.toHaveClass(expectedClass);
      } else {
        expect(screen.getByTestId('avatar')).toHaveClass(expectedClass);
      }
    });
  });

  const sizeTests = [
    "tiny", "xsmall", "small", "medium", "large", "xlarge", "big"
  ];

  sizeTests.forEach(size => {
    it(`should render with size ${size}`, () => {
      renderAvatar({ type: "placeholder", size });
      expect(screen.getByTestId('avatar')).toHaveClass(`avatar-${size}`);
    });
  });

  const bgColorTests = [
    "strongGradient01", "strongGradient02"
  ];

  bgColorTests.forEach(color => {
    it(`should render with bgColor ${color}`, () => {
      renderAvatar({ type: "placeholder", size: "xlarge", bgColor: color });
      expect(screen.getByTestId('avatar')).toHaveClass(`avatar-bg-color-${color}`);
    });
  });

  const borderTests = [
    { isBorder: true, shouldHave: true },
    { isBorder: false, shouldHave: false }
  ];

  borderTests.forEach(({ isBorder, shouldHave }) => {
    it(`should render with border if isBorder is ${isBorder}`, () => {
      renderAvatar({ type: "placeholder", size: "xlarge", isBorder });
      if (shouldHave) {
        expect(screen.getByTestId('avatar')).toHaveClass('avatar-border-xlarge');
      } else {
        expect(screen.getByTestId('avatar')).not.toHaveClass('avatar-border-xlarge');
      }
    });
  });

  it('should render with topStatus VerifiedGreen', () => {
    renderAvatar({ type: "placeholder", size: "xlarge", topStatus: "VerifiedGreen" });
    expect(screen.getByTestId('avatar').querySelector('.package_logo_verifiedgreen')).toBeInTheDocument();
  });

  it('should render with topStatus NotificationWithNumber and number 10', () => {
    renderAvatar({ type: "placeholder", size: "xlarge", topStatus: "NotificationWithNumber", notificationNumber: 10 });
    expect(screen.getByTestId('avatar').querySelector('.avatar-top-status-notification-number')).toBeInTheDocument();
    expect(screen.getByTestId('avatar').querySelector('.avatar-top-status-notification-number')).toHaveTextContent('10');
  });

  it('should render with topStatus logo with topStatusLogo', () => {
    renderAvatar({ type: "placeholder", size: "xlarge", topStatus: "Logo", topStatusLogo: <MsExcel /> });
    expect(screen.getByTestId('avatar').querySelector('.avatar-top-status-logo')).toBeInTheDocument();
  });

  const bottomStatusTests = [
    "Invisible", "Active", "DonotDisturb"
  ];

  bottomStatusTests.forEach(status => {
    it(`should render with bottomStatus ${status}`, () => {
      renderAvatar({ type: "placeholder", size: "xlarge", bottomStatus: status });
      expect(screen.getByTestId('avatar').querySelector(`.package_logo_${status.toLowerCase()}`)).toBeInTheDocument();
    });
  });
});
