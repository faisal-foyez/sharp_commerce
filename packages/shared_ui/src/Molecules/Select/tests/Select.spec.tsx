import { render, screen } from '@testing-library/react';
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from '../index';
import '@testing-library/jest-dom';

describe('Select', () => {
  it('should render', () => {
    render(
      <Select>
      <SelectAction data-testid="select-action" style={{width: '20rem'}}>
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
    );
    expect(screen.getByTestId('select-action')).toBeInTheDocument();
  });
});