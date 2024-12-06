import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";
import { withThemeDecorator } from "../../utils/storybook/withThemeDecorator";

const meta: Meta<typeof Label> = {
  title: "Components/Atoms/Label",
  component: Label,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    children: { control: 'text' },
    isShowOptional: { control: 'boolean' },
    isShowBadge: { control: 'boolean' },
    badgeText: { control: 'text', options: ["Badge"] },
    isShowRequired: { control: 'boolean' },
    isShowInfoIcon: { control: 'boolean' },
    infoText: { control: 'text', options: ["Info Text"] },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

const createLabelStory = (args: any) => ({
  args,
  render: () => (
    <div style={{ width: '200px' }}>
      <Label {...args}>{args.children}</Label>
    </div>
  ),
});

export const Default: Story = createLabelStory({ children: "Label" });

export const LabelWithOptionalText: Story = createLabelStory({
  children: "Label",
  isShowOptional: true,
});

export const LabelWithRequiredText: Story = createLabelStory({
  children: "Label",
  isShowOptional: false,
  isShowRequired: true,
});

export const LabelWithInfoIcon: Story = createLabelStory({
  children: "Label",
  isShowInfoIcon: true,
});

export const LabelWithInfoIconAndInfoText: Story = createLabelStory({
  children: "Label",
  isShowInfoIcon: true,
  infoText: "Info Text",
});
