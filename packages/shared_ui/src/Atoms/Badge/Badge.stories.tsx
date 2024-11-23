import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import { BadgeColor, BadgeSize, BadgeStyle } from "@dsc/foundation/lib";
import { ArrowLeft, ArrowRight } from "@dsc/phosphor_icons";
import {Figma} from "@dsc/logos/lib/brand_logo/index.jsx";

type BadgeColorType = keyof typeof BadgeColor;
type BadgeSizeType = keyof typeof BadgeSize;
type BadgeStyleType = keyof typeof BadgeStyle;

const meta: Meta<typeof Badge> = {
  title: "Components/Atoms/Badge",
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      options: Object.values(BadgeColor)
    },
    size: {
      options: Object.values(BadgeSize)
    },
    style: {
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
  },
};

export default meta;

// Add this decorator function after the meta export
const withThemeDecorator = (Story: any) => {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <div style={{ padding: '20px', background: '#ffffff' }}>
        <h3 style={{textAlign: 'center'}}>Light Mode</h3>
        <Story />
      </div>
      <div data-theme='dark' style={{ padding: '20px', borderRadius: '10px', background: '#1C222B', color: '#ffffff' }}>
        <h3 style={{ color: '#ffffff', textAlign: 'center' }}>Dark Mode</h3>
        <Story />
      </div>
    </div>
  );
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
  decorators: [withThemeDecorator],
};

export const AllBadgeColorsAndSizesAndStyles: Story = {
  args: {
    children: "Badge",
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};

export const AllBadgeWithLeftIcon: Story = {
  args: {
    children: "Badge",
    leftIcon: 'ArrowLeft'
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};

export const AllBadgeWithRightIcon: Story = {
  args: {
    children: "Badge",
    rightIcon: 'ArrowRight'
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};

export const AllBadgeWithBothIcon: Story = {
  args: {
    children: "Badge",
    leftIcon: 'ArrowLeft',
    rightIcon: 'ArrowRight'
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};

export const AllBadgeWithLogo: Story = {
  args: {
    children: "Badge",
    badgeLogo: 'Figma'
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};

export const AllBadgeWithDot: Story = {
  args: {
    children: "Badge",
    isShowDot: true
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};

export const AllBadgeWithDisabled: Story = {
  args: {
    children: "Badge",
    disabled: true
  },
  decorators: [withThemeDecorator],
  render: (args) => {
    return (
      <>
        {Object.values(BadgeSize).map(size=>{
          return (
            <>
            <div style={{marginTop:'60px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}} key={size}>
              {Object.values(BadgeColor).map(color=>{
                return(
                  <div style={{display: 'flex', flexDirection: 'row', gap: '80px'}} key={color}>
                    {Object.values(BadgeStyle).map(style=>{
                      return (
                        <Badge {...args} color={color as BadgeColorType} size={size as BadgeSizeType} style={style as BadgeStyleType}>Badge</Badge>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            </>
          )
        })}
      </>
    )
  }
};