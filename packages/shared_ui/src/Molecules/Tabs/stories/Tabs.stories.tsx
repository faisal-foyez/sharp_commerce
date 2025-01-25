import { Meta, StoryObj } from "@storybook/react";
import { 
  Tabs,
  TabsList,
  TabsItem,
  TabsContent,
} from "../index";
import { Skeleton, SkeletonLine } from "../../Skeleton";
import { User, Gear, Buildings, ShieldWarning } from "@dsc/phosphor_icons";
import { withThemeDecorator } from "../../../utils/storybook/withThemeDecorator";

const meta: Meta<typeof Tabs> = {
  title: "Components/Molecules/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  decorators: [withThemeDecorator],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline'],
    },
  },
};

export default meta;

const renderTabs = (isShowIcon: boolean, args: any) => {
  return (
    <Tabs {...args} defaultValue="item-1" style={{margin: 'auto', maxWidth: '500px'}}>
      <TabsList>
      <TabsItem value="item-1">
          {isShowIcon && <User size={16} />}
          Profile
        </TabsItem>
        <TabsItem value="item-2">
          {isShowIcon && <Gear size={16} />}
          Settings
        </TabsItem>
        <TabsItem value="item-3">
          {isShowIcon && <Buildings size={16} />}
          Company
        </TabsItem>
        <TabsItem value="item-4">
          {isShowIcon && <ShieldWarning size={16} />}
          Privacy
        </TabsItem>
      </TabsList>
      <TabsContent value="item-1">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} >
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '83.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '66.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-2">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} className="max-w-full space-y-2.5">
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '83.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '61.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '56.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-3">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} className="max-w-full space-y-2.5">
          <SkeletonLine style={{width: '40.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '83.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '30.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
      <TabsContent value="item-4">
        <Skeleton style={{maxWidth: '100%', margin:'.625rem'}} className="max-w-full space-y-2.5">
          <SkeletonLine style={{width: '91.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '20.33333333333334%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '70.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
          <SkeletonLine style={{width: '55.66666666666666%', height: '1rem', margin: '0.625rem 0'}} />
        </Skeleton>
      </TabsContent>
    </Tabs>
  )
};

export const Default: StoryObj<typeof Tabs> = {
  render: (args: any)=>renderTabs(false, args),
};

export const TabsUnderlined: StoryObj<typeof Tabs> = {
  args: {
    variant: 'underline',
  },
  render: (args: any)=>renderTabs(false, args),
};

export const TabsWithIcons: StoryObj<typeof Tabs> = {
  render: (args: any)=>renderTabs(true, args),
};

export const TabsWithIconsUnderlined: StoryObj<typeof Tabs> = {
  args: {
    variant: 'underline',
  },
  render: (args: any)=>renderTabs(true, args),
};
