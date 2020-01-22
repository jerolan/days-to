import React, { useState } from "react";

import MainLayout from "../components/MainLayout";
import EventList from "../components/EventList";

const intialEvents = [
  {
    id: "0",
    title: "some title",
    date: new Date(2020, 1, 4)
  },
  {
    id: "1",
    title: "some title 2",
    date: new Date(2020, 0, 31)
  }
];

export default function Home() {
  const [events, setEvents] = useState(intialEvents);

  function handleClick() {
    const [someEvent] = events;
    return setEvents([
      ...events,
      {
        id: events.length.toString(),
        ...someEvent
      }
    ]);
  }

  return (
    <MainLayout>
      <div onClick={handleClick}>agregar</div>
      <EventList events={events} />
    </MainLayout>
  );
}
