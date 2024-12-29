import { render, screen } from '@testing-library/react';
import { Popover, PopoverContent, PopoverAction, PopoverTitle, PopoverDescription } from '../index';
import '@testing-library/jest-dom';
describe('Popover', () => {
  const renderPopover = () => {
    return (
      <Popover>
      <PopoverAction data-testid="popover-action-testid" asChild>
        <button>Open Popover</button>
      </PopoverAction>
      <PopoverContent style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', backgroundColor: 'white', padding: '0px 10px', borderRadius: '10px',}}>
        <div>
          <button>Button</button>
        </div>
        <div>
          <PopoverTitle>Keep Designer</PopoverTitle>
          <PopoverDescription>keepdesign@email.com</PopoverDescription>
        </div>
      </PopoverContent>
    </Popover>
    );
  };

  it('should render the Popover component', () => {
    render(renderPopover());
    expect(screen.getByTestId('popover-action-testid')).toBeInTheDocument();
  });
});