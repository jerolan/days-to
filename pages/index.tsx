import React, { useState } from "react";

import { DateEvent } from "../components/Event";
import MainLayout from "../components/MainLayout";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";

export default function Home() {
  const [events, setEvents] = useState<DateEvent[]>([]);
  const [modal, setModal] = useState(false);

  function handleEventSubmit(event: DateEvent) {
    events.push(event);
    setEvents(events);
  }

  function handleToggleModal() {
    setModal(!modal);
  }

  return (
    <MainLayout>
      <div onClick={handleToggleModal} className="py-1">
        <p className="font-medium text-right cursor-pointer">Agregar</p>
      </div>
      <EventList events={events} />
      <EventForm
        show={modal}
        onToggleModal={handleToggleModal}
        onEventSubmit={handleEventSubmit}
      />
    </MainLayout>
  );
}
