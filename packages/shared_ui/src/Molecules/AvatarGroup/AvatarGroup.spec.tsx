import {render, screen} from '@testing-library/react';
import AvatarGroup from './AvatarGroup';
import '@testing-library/jest-dom';

describe('AvatarGroup', () => {
  it('renders correctly', () => {
    const {baseElement} = render(<AvatarGroup type='placeholder' count={10} size='big'/>);
    expect(baseElement).toBeInTheDocument();
  });

  it('renders correctly with 10 avatars', () => {
    const {baseElement} = render(<AvatarGroup type='placeholder' count={10} size='big'/>);
    const avatars = baseElement.querySelectorAll('.avatar-container');
    expect(avatars.length).toBe(6);
  });

  it('renders correctly with 10 avatars and isShowMaxAvatar false', () => {
    const {baseElement} = render(<AvatarGroup type='placeholder' count={10} size='big' isShowMaxAvatar={false}/>);
    const avatars = baseElement.querySelectorAll('.avatar-container');
    expect(avatars.length).toBe(6);
  });

  it('renders correctly with 10 avatars  and isShowMaxAvatar true', () => {
    const {baseElement} = render(<AvatarGroup type='placeholder' count={10} size='big' isShowMaxAvatar={true}/>);
    const avatars = baseElement.querySelectorAll('.avatar-container');
    expect(avatars.length).toBe(8);
  });

  it('renders correctly with last avatar is placeholder', () => {
    const {baseElement} = render(<AvatarGroup type='letterOfName' data={[{letter:'AI'},{letter:'FI'}]} size='big' isShowMaxAvatar={true} lastAvatarType='placeholder'/>);
    const avatars = baseElement.querySelectorAll('.package_logo_placeholder');
    expect(avatars.length).toBe(1);
  });
});
