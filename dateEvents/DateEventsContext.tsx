import React, { useEffect } from "react";

import DateEvent from "./event";

export enum DateEventReducerActions {
  CreateEvent = "create_event",
  DeleteEvent = "delete_event"
}

type DateEventProviderProps = { children: React.ReactNode };
type State = { dateEvents: DateEvent[] };
type Dispatch = (action: Action) => void;
type Action = {
  type: DateEventReducerActions;
  payload: DateEvent;
};

const DATE_EVENT_STORE_KEY = "date_event_store_key";

const DateEventStateContext = React.createContext<State | undefined>(undefined);
const DateEventDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function dateEventReducer(state: State, action: Action) {
  switch (action.type) {
    case DateEventReducerActions.CreateEvent: {
      let { dateEvents } = state;
      dateEvents.push(action.payload);
      return { ...state, dateEvents };
    }
    case DateEventReducerActions.DeleteEvent: {
      let { dateEvents } = state;
      dateEvents = dateEvents.filter(de => de.id !== action.payload.id);
      return { ...state, dateEvents };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DateEventProvider({ children }: DateEventProviderProps) {
  const [state, dispatch] = React.useReducer(dateEventReducer, {
    dateEvents: []
  });

  useEffect(() => {
    console.log("first");

    return () => {
      console.log("last");
    };
  });

  return (
    <DateEventStateContext.Provider value={state}>
      <DateEventDispatchContext.Provider value={dispatch}>
        {children}
      </DateEventDispatchContext.Provider>
    </DateEventStateContext.Provider>
  );
}

function useDateEventState() {
  const context = React.useContext(DateEventStateContext);
  if (context === undefined) {
    throw new Error(
      "useDateEventState must be used within a DateEventProvider"
    );
  }
  return context;
}

function useDateEventDispatch() {
  const context = React.useContext(DateEventDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDateEventDispatch must be used within a DateEventProvider"
    );
  }
  return context;
}

export { DateEventProvider, useDateEventState, useDateEventDispatch };
