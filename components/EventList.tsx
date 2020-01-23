import React from "react";

import DateEvent from "../dateEvents/event";
import Event from "./Event";

type EventListProps = {
  events: DateEvent[];
};

const EventList: React.FunctionComponent<EventListProps> = ({ events }) => {
  return (
    <>
      {events.map(event => (
        <div className="mb-3">
          <Event
            key={event.id}
            title={event.title}
            date={event.date}
          />
        </div>
      ))}
    </>
  );
};

export default EventList;
