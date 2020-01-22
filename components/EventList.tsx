import React from "react";

import Event, { EventProps } from "./Event";

export interface EventListProps {
  events: EventProps[];
}

const EventList: React.FunctionComponent<EventListProps> = ({ events }) => {
  return (
    <>
      {events.map(event => (
        <div className="mb-3">
          <Event
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
          />
        </div>
      ))}
    </>
  );
};

export default EventList;
