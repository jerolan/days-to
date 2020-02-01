import React, { useState } from "react";
import uuid from "uuid/v4";

import Layout from "../components/Layout";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";
import ToolBar, { ToolBarItem } from "../components/ToolBar";
import {
  DateEvent,
  DateEventReducerActions,
  useDateEventState,
  useDateEventDispatch
} from "../context/DateEventsContext";

export default function Home() {
  const dateEvents = useDateEventState();
  const dateEventsDispatch = useDateEventDispatch();
  const [modal, setModal] = useState(false);

  function handleEventSubmit(event: DateEvent) {
    event.id = uuid();
    dateEventsDispatch({
      type: DateEventReducerActions.CreateEvent,
      payload: event
    });
  }

  function handleToggleModal() {
    setModal(!modal);
  }

  return (
    <Layout>
      <ToolBar>
        <ToolBarItem onClick={handleToggleModal}>Add</ToolBarItem>
      </ToolBar>
      <EventList events={dateEvents.dateEvents} />
      <EventForm
        show={modal}
        onToggleModal={handleToggleModal}
        onEventSubmit={handleEventSubmit}
      />
    </Layout>
  );
}
