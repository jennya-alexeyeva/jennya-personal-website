import React from 'react';
import {
  TimelineItem,
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from "@mui/lab";

const ExperienceTimeline = ({title, items}) => {
  return (
      <div>
        <h1>{title}</h1>
        <Timeline position="alternate">
          {items.map((item, idx) => (
              <TimelineItem>
                <TimelineOppositeContent>
                  {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                  </TimelineDot>
                  {items[idx + 1] ? <TimelineConnector /> : ''}
                </TimelineSeparator>
                <TimelineContent>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </TimelineContent>
              </TimelineItem>
          ))}
        </Timeline>
      </div>
  )
}

export default ExperienceTimeline