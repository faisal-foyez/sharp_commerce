import { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyDescription, EmptyImage, EmptyTitle } from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';

const meta: Meta<typeof Empty> = {
  title: 'Components/Molecules/Empty',
  component: Empty,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Empty>;

const renderEmpty = (props: any) => {
  return (
    <Empty>
      <EmptyImage>
        <img
          src={props.imgSrc}
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">Oops! You seem to be lost</EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
    </Empty>
  )
}

export const Default: Story = {
  args: {},
  render: (args) => renderEmpty({imgSrc: 'https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg'}),
};

export const EmptyFolder: Story = {
  args: {},
  render: (args) => renderEmpty({imgSrc: 'https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg'}),
};

export const NoResultPage: Story = {
  args: {},
  render: (args) => renderEmpty({imgSrc: 'https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg'}),
};

export const PageNotAvailable: Story = {
  args: {},
  render: (args) => renderEmpty({imgSrc: 'https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg'}),
};

export const PageNotFound: Story = {
  args: {},
  render: (args) => renderEmpty({imgSrc: 'https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg'}),
};

export const NoDataFound: Story = {
  args: {},
  render: (args) => renderEmpty({imgSrc: 'https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg'}),
};
