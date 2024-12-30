import { screen, render } from '@testing-library/react';
import { Pagination, PaginationItem, PaginationList } from '../index';
import '@testing-library/jest-dom';
import { DotsThree } from '@dsc/phosphor_icons';

describe('Pagination', () => {
  const renderPagination = (props?: any) => {
    return (
      <Pagination {...props} data-testid="pagination_testid">
        <PaginationList >
          <PaginationItem>1</PaginationItem>
          <PaginationItem active>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>
            <DotsThree size={20} />
          </PaginationItem>
          <PaginationItem>10</PaginationItem>
        </PaginationList>
      </Pagination>
    )
  };
  it('should render', () => {
    render(renderPagination({}));
    expect(screen.getByTestId('pagination_testid')).toBeInTheDocument();
  });
});