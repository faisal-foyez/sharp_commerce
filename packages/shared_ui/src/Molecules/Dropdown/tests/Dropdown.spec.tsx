import { render, screen } from '@testing-library/react';
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
import '@testing-library/jest-dom';

describe('Dropdown', () => {
  const renderDropdown = () => {
    return (
      <Dropdown>
      <DropdownAction data-testid="dropdown_action_testid" asChild>
        <button>Select a framework</button>
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
    )
  }
  it('should render', () => {
    render(renderDropdown());
    expect(screen.getByTestId('dropdown_action_testid')).toBeInTheDocument();
  });
});