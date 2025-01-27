import { Meta, StoryObj } from "@storybook/react";
import { 
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent
} from "../index";
import { withThemeDecorator } from "../../../utils/storybook/withThemeDecorator";

const meta: Meta<typeof Timeline> = {
  title: 'Components/Molecules/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: (args) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}} >September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 1 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 2 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 3 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
};

export const DashedTimeline: Story = {
  render: (args) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Timeline style={{borderStyle: 'dashed'}}>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}} >September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 1 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 2 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 3 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
};

export const DottedTimeline: Story = {
  render: (args) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Timeline style={{borderStyle: 'dotted'}}>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}} >September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 1 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 2 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 3 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
};

export const TimelineWithImage: Story = {
  render: (args) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Timeline style={{borderStyle: 'dotted'}}>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}} >September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 1 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=1" style={{width: '100%', height: 'auto', marginTop: '16px', borderRadius: '8px'}} alt="item1" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 2 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=2" style={{width: '100%', height: 'auto', marginTop: '16px', borderRadius: '8px'}} alt="item2" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>September 23,2022</p>
            <h1 style={{fontSize: '16px', fontWeight: 'medium', color: '#1A202C'}}>Step 3 Completed</h1>
            <p style={{fontSize: '14px', fontWeight: 'normal', lineHeight: '1.4', color: '#6B7280'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, incidunt.
            </p>
            <img src="https://picsum.photos/400/230?v=3" style={{width: '100%', height: 'auto', marginTop: '16px', borderRadius: '8px'}} alt="item3" />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
};