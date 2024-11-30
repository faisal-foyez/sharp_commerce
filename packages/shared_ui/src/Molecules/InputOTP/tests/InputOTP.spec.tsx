import { render, screen } from '@testing-library/react';
import { InputOTP, InputOTPItem, InputOTPGroup, InputOTPDivider } from '../index';
import '@testing-library/jest-dom';

describe('InputOTP', () => {
  it('renders correctly', () => {
    render(
      <InputOTP data-testid='input-otp-testid' onChange={() => {}}>
        <InputOTPGroup>
          <InputOTPItem index={0}/>
          <InputOTPItem index={1}/>
          <InputOTPItem index={2}/>
          <InputOTPItem index={3}/>
        </InputOTPGroup>
        <InputOTPDivider />
      </InputOTP>
    );
    expect(screen.getByTestId('input-otp-testid')).toBeInTheDocument();
  });
});