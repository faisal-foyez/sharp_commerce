import { Meta, StoryObj } from "@storybook/react";
import { withThemeDecorator } from "../../../utils/storybook/withThemeDecorator";
import {
  Accordion,
  AccordionItem,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionTitle,
} from "../index";

const meta: Meta<typeof Accordion> = {
  title: "Components/Molecules/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [withThemeDecorator],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    flush: {
      control: "boolean",
    },
    collapsible: {
      control: "boolean",
    },
    defaultValue: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

const renderAccordion = ({...props}) => {
  return (
    <Accordion flush={true} type="single" collapsible {...props}>
      <AccordionItem  value="value-1">
        <AccordionAction>
          <AccordionTitle>
            Q. What is the purpose of the Keep React?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified
          user experience across our products. It simplifies the design and development process by providing
          ready-to-use components that can be easily customized and integrated into various applications.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="value-2">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500">
            Q. How do I customize the color scheme of components?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
          available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
          prop when using the component, and it will reflect the chosen color.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="value-3">
        <AccordionAction>
          <AccordionTitle className="first-letter:text-primary-500">
            Q. Can I add additional content to notifications?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent>
          Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
          message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
          or icons, within the notification to provide users with more context and options.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: (args) => {
    return renderAccordion(args);
  }
};
export const FlushAccordion: Story = {
  args: {
    flush: true,
  },
  render: (args) => renderAccordion(args)
};

export const DefaultOpenAccordion: Story = {
  args: {
    defaultValue: "value-1",
  },
  render: (args) => {
    return renderAccordion(args);
  },
};

export const OpenMultiplePanelAccordion: Story = {
  args: {
    type: "multiple",
    defaultValue: ["value-1", "value-2"],
  },
  render: (args) => renderAccordion(args),
};

export const DisabledAccordion: Story = {
  args: {
    disabled: true,
  },
  render: (args) => renderAccordion(args),
};
