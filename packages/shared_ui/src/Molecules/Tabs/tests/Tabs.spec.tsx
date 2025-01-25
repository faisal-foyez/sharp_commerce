import { render, screen } from "@testing-library/react";
import { 
  Tabs,
  TabsList,
  TabsItem,
  TabsContent
 } from "../index";
import '@testing-library/jest-dom';

describe('Tabs', () => {
  it('should render tabs', () => {
    render(
      <Tabs data-testid="tabs" defaultValue="item-1" style={{margin: 'auto', maxWidth: '500px'}}>
        <TabsList>
          <TabsItem value="item-1">
            Profile
          </TabsItem>
          <TabsItem value="item-2">
            Settings
          </TabsItem>
          <TabsItem value="item-3">
            Company
          </TabsItem>
          <TabsItem value="item-4">
            Privacy
          </TabsItem>
        </TabsList>
        <TabsContent value="item-1">
          <div>
            <p>Hello</p>
          </div>
        </TabsContent>
        <TabsContent value="item-2">
          <div>
            <p>Hello</p>
          </div>
        </TabsContent>
        <TabsContent value="item-3">
          <div>
            <p>Hello</p>
          </div>
        </TabsContent>
        <TabsContent value="item-4">
          <div>
            <p>Hello</p>
          </div>
        </TabsContent>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });
});