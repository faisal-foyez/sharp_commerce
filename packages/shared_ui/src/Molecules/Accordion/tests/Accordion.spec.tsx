import { fireEvent, render, screen } from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionTitle,
  AccordionProps,
} from "../index";
import '@testing-library/jest-dom';

describe("Accordion", () => {
  const renderAccordion = ({...props}) => {
    return (
      <Accordion data-testid="accordion_testid" type="single" collapsible {...props}>
        <AccordionItem disabled={props.disabled} data-testid="accordion_item_testid" value="item-1">
          <AccordionAction data-testid="accordion_action_testid">
            <AccordionTitle data-testid="accordion_title_testid" className="first-letter:text-primary-500">
              Q. What is the purpose of the Keep React?
            </AccordionTitle>
            <AccordionIcon data-testid="accordion_icon_testid" />
          </AccordionAction>
        </AccordionItem>
      </Accordion>
    );
  };
  it("should render", () => {
    render(renderAccordion({}));
    expect(screen.getByTestId("accordion_testid")).toBeInTheDocument();
    expect(screen.getByTestId("accordion_item_testid")).toBeInTheDocument();
    expect(screen.getByTestId("accordion_action_testid")).toBeInTheDocument();
    expect(screen.getByTestId("accordion_title_testid")).toBeInTheDocument();
    expect(screen.getByTestId("accordion_icon_testid")).toBeInTheDocument();
  });

  it("should render with default open", () => {
    render(renderAccordion({ defaultValue: "item-1" }));
    expect(screen.getByTestId("accordion_action_testid")).toHaveAttribute("data-state", "open");
  });

  it("should contain flush class if flush prop is true", () => {
    render(renderAccordion({ flush: true }));
    expect(screen.getByTestId("accordion_testid")).toHaveClass("dsc-accordion-flush");
  });

  it("should open when an action is clicked", () => {
    render(renderAccordion({}));
    const accordionAction = screen.getByTestId("accordion_action_testid");
    fireEvent.click(accordionAction);
    expect(screen.getByTestId("accordion_action_testid")).toHaveAttribute("data-state", "open");
  });

  it("should close when an action is clicked twice", () => {
    render(renderAccordion({}));
    const accordionAction = screen.getByTestId("accordion_action_testid");
    fireEvent.click(accordionAction);
    expect(screen.getByTestId("accordion_action_testid")).toHaveAttribute("data-state", "open");
    fireEvent.click(accordionAction);
    expect(screen.getByTestId("accordion_action_testid")).toHaveAttribute("data-state", "closed");
  });

  it("should contain disabled class if disabled prop is true", () => {
    render(renderAccordion({ disabled: true }));
    expect(screen.getByTestId("accordion_item_testid")).toHaveClass("dsc-accordion-item-disabled");
  });
});
