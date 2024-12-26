import { render, screen } from "@testing-library/react";
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
import '@testing-library/jest-dom';

describe("Drawer", () => {
  it("renders correctly", () => {
    render(
      <Drawer>
      <DrawerAction data-testid="drawer_action_testid" asChild>
        <Button>Open Drawer</Button>
      </DrawerAction>
      <DrawerContent position="left">
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
    );
    expect(screen.getByTestId("drawer_action_testid")).toBeInTheDocument();
  });
  
});
