import { Anchor, Arrow, Close, type PopoverProps, Root, Trigger } from '@radix-ui/react-popover'

import PopoverContent from "./PopoverContent";
import PopoverDescription from "./PopoverDescription";
import PopoverTitle from "./PopoverTitle";

const Popover = Root
const PopoverAction = Trigger
const PopoverClose = Close
const PopoverArrow = Arrow
const PopoverAnchor = Anchor


export { 
  Root as Popover,
  Trigger as PopoverAction,
  Anchor as PopoverAnchor,
  Arrow as PopoverArrow,
  Close as PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverProps,
  PopoverTitle,
};