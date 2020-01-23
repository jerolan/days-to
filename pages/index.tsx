import React, { useState } from "react";

import MainLayout from "../components/MainLayout";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";
import ToolBar, { ToolBarItem } from "../components/ToolBar";
import DateEvent from "../dateEvents/event";
import {
  DateEventReducerActions,
  useDateEventState,
  useDateEventDispatch
} from "../dateEvents/DateEventsContext";

export default function Home() {
  const dateEvents = useDateEventState();
  const dateEventsDispatch = useDateEventDispatch();
  const [modal, setModal] = useState(false);

  function handleEventSubmit(event: DateEvent) {
    dateEventsDispatch({
      type: DateEventReducerActions.CreateEvent,
      payload: event
    });
  }

  function handleToggleModal() {
    setModal(!modal);
  }

  return (
    <MainLayout>
      <ToolBar>
        <ToolBarItem onClick={handleToggleModal}>Agregar</ToolBarItem>
      </ToolBar>
      <EventList events={dateEvents.dateEvents} />
      <EventForm
        show={modal}
        onToggleModal={handleToggleModal}
        onEventSubmit={handleEventSubmit}
      />
    </MainLayout>
  );
}
