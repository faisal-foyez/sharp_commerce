import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import { BadgeColor, BadgeSize, BadgeStyle } from "@dsc/foundation/lib";
import { ArrowLeft, ArrowRight } from "@dsc/phosphor_icons";
import { Figma } from "@dsc/logos/lib/brand_logo/index.jsx";
import { withThemeDecorator } from "../../utils/storybook/withThemeDecorator";

type BadgeColorType = keyof typeof BadgeColor;
type BadgeSizeType = keyof typeof BadgeSize;
type BadgeStyleType = keyof typeof BadgeStyle;

const meta: Meta<typeof Badge> = {
  title: "Components/Atoms/Badge",
  component: Badge,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
  argTypes: {
    children: {
      control: 'text',
    },
    colorVariant: {
      options: Object.values(BadgeColor)
    },
    sizeVariant: {
      options: Object.values(BadgeSize)
    },
    styleVariant: {
      options: Object.values(BadgeStyle)
    },
    leftIcon: {
      control: 'select',
      options: ['ArrowLeft', 'ArrowRight'],
      mapping: {
        ArrowLeft: <ArrowLeft />,
        ArrowRight: <ArrowRight />
      }
    },
    rightIcon: {
      control: 'select',
      options: ['ArrowLeft', 'ArrowRight'],
      mapping: {
        ArrowLeft: <ArrowLeft />,
        ArrowRight: <ArrowRight />
      }
    },
    isShowDot: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    badgeLogo: {
      control: 'select',
      options: ['Figma'],
      mapping: {
        Figma: <Figma />
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

const renderBadges = (args: any) => {
  return (
    <>
      {Object.values(BadgeSize).map(size => (
        <div style={{ marginTop: '60px' }} key={size}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            {Object.values(BadgeColor).map(color => (
              <div style={{ display: 'flex', flexDirection: 'row', gap: '80px' }} key={color}>
                {Object.values(BadgeStyle).map(style => (
                  <Badge {...args} colorVariant={color as BadgeColorType} sizeVariant={size as BadgeSizeType} styleVariant={style as BadgeStyleType}>Badge</Badge>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const AllBadgeColorsAndSizesAndStyles: Story = {
  args: {
    children: "Badge",
  },
  render: renderBadges,
};

export const AllBadgeWithLeftIcon: Story = {
  args: {
    children: "Badge",
    leftIcon: 'ArrowLeft'
  },
  render: (args) => renderBadges(args),
};

export const AllBadgeWithRightIcon: Story = {
  args: {
    children: "Badge",
    rightIcon: 'ArrowRight'
  },
  render: (args) => renderBadges(args),
};

export const AllBadgeWithBothIcon: Story = {
  args: {
    children: "Badge",
    leftIcon: 'ArrowLeft',
    rightIcon: 'ArrowRight'
  },
  render: (args) => renderBadges(args),
};

export const AllBadgeWithLogo: Story = {
  args: {
    children: "Badge",
    badgeLogo: 'Figma'
  },
  render: (args) => renderBadges(args),
};

export const AllBadgeWithDot: Story = {
  args: {
    children: "Badge",
    isShowDot: true
  },
  render: (args) => renderBadges(args),
};

export const AllBadgeWithDisabled: Story = {
  args: {
    children: "Badge",
    disabled: true
  },
  render: (args) => renderBadges(args),
};