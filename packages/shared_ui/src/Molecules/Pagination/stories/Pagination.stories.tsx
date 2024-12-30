import { Meta, StoryObj } from '@storybook/react';
import { 
  Pagination, 
  PaginationList,
  PaginationItem,
  PaginationNavigator,
  PaginationGoTo,
} from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { CaretLeft, CaretRight, DotsThree } from '@dsc/phosphor_icons';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const renderPagination = (args:any) => {
  return (
    <Pagination {...args}                                                                   >
      <PaginationList>
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
  );
};

export const Default: Story = {
  args: {
    shape: 'rounded',
  },
  render: renderPagination,
};

export const CirclePagination: Story = {
  args: {
    shape: 'circle',
  },
  render: (args) => renderPagination(args),
};

export const NavigatorWithIcon: Story = {
  args: {
    shape: 'rounded',
  },
  render: (args) => {
    return (
      <Pagination {...args}>
        <PaginationNavigator shape="circle">
          <CaretLeft size={18} />
        </PaginationNavigator>
        <PaginationList>
          <PaginationItem>1</PaginationItem>
          <PaginationItem active>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>
            <DotsThree size={20} />
          </PaginationItem>
          <PaginationItem>10</PaginationItem>
        </PaginationList>
        <PaginationNavigator shape="circle">
          <CaretRight size={18} />
        </PaginationNavigator>
      </Pagination>
    )
  },
};

export const NavigatorWithText: Story = {
  args: {
    shape: 'rounded',
  },
  render: (args) => {
    return (
      <Pagination shape="rounded">
      <PaginationNavigator>
        <CaretLeft size={18} />
        Previous
      </PaginationNavigator>
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem active>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>
          <DotsThree size={20} />
        </PaginationItem>
        <PaginationItem>10</PaginationItem>
      </PaginationList>
      <PaginationNavigator>
        Next
        <CaretRight size={18} />
      </PaginationNavigator>
    </Pagination>
    )
  },
}

export const PaginationWithGoto: Story = {
  args: {
    shape: 'rounded',
  },
  render: (args) => {
    return (
      <Pagination shape="circle">
      <PaginationNavigator shape="circle">
        <CaretLeft size={18} />
      </PaginationNavigator>
      <PaginationList>
        <PaginationItem>1</PaginationItem>
        <PaginationItem active>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>
          <DotsThree size={20} />
        </PaginationItem>
        <PaginationItem>10</PaginationItem>
      </PaginationList>
      <PaginationNavigator shape="circle">
        <CaretRight size={18} />
      </PaginationNavigator>
      <PaginationGoTo>
        <span>/ Go to</span>
         <input
          type="number"
          style={{
            height: '36px',
            width: '60px',
            borderRadius: '10px',
            border: '1px solid gray',
            textAlign: 'center',
            color: 'gray',
            outline: 'none',
          }}
          defaultValue={20}
        />
        <span>of 200</span>
      </PaginationGoTo>
    </Pagination>
    )
  },
}