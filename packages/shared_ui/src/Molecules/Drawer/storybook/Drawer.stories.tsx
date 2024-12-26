import { Meta, StoryObj } from "@storybook/react";
import { withThemeDecorator } from "../../../utils/storybook/withThemeDecorator";
import Button from "../../../Atoms/Button/Button";
import { Skeleton, SkeletonLine } from "../../../Molecules/Skeleton/index";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerAction,
  DrawerFooter,
} from "../index";

const meta: Meta<typeof Drawer> = {
  title: "Components/Molecules/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const renderDrawer = (position: "left" | "right" | "bottom" | "top", args?: any) =>{
  return (
    <Drawer {...args}>
      <DrawerAction asChild>
        <Button>Open {position} Drawer</Button>
      </DrawerAction>
      <DrawerContent position={position}>
        <div style={{ 
          margin: "0 auto",
          width: "400px",
          padding: "16px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }} 
          >
          <Skeleton style={{margin: ".625rem 0"}} >
            <SkeletonLine style={{height: "200px", margin: ".625rem 0", width: "100%"}}  />
            <SkeletonLine style={{height: "1rem", margin: ".625rem 0", width: "100%"}}  />
            <SkeletonLine style={{height: "1rem", margin: ".625rem 0", width: "100%"}}  />
            <SkeletonLine style={{height: "1rem", margin: ".625rem 0", width: "100%"}}  />
            <SkeletonLine style={{height: "1rem", margin: ".625rem 0", width: "100%"}}  />
            <SkeletonLine style={{height: "2.5rem", margin: ".625rem 0", width: "33%"}} />
          </Skeleton>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const Default: Story = {
  args: {},
  render: (args) => renderDrawer("left", args)
};

export const DrawerRight: Story = {
  args: {},
  render: (args) => renderDrawer("right", args)
};

export const DrawerBottom: Story = {
  args: {},
  render: (args) => renderDrawer("bottom", args)
};

export const DrawerTop: Story = {
  args: {},
  render: (args) => renderDrawer("top", args)
};
        
