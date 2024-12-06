import { Meta, StoryObj } from "@storybook/react";
import HelperText from "./HelperText";
import { withThemeDecorator } from "../../utils/storybook/withThemeDecorator";

const meta: Meta<typeof HelperText> = {
  title: "Components/Atoms/HelperText",
  component: HelperText,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};


export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {
    children: "Info that helps a user with this field.",
  }
};

export const HelperTextWithoutInfoIcon: Story = {
  args: {
    children: "Info that helps a user with this field.",
    isShowInfoIcon: false,
  }
};