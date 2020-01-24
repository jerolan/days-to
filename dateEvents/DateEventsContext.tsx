import React, { useEffect } from "react";
import localForage from "localforage";

import DateEvent from "./event";

export enum DateEventReducerActions {
  SetEvents = "set_events",
  CreateEvent = "create_event",
  DeleteEvent = "delete_event"
}

type DateEventProviderProps = { children: React.ReactNode };
type State = { loaded: boolean; dateEvents: DateEvent[] };
type Dispatch = (action: Action) => void;
type Action = {
  type: DateEventReducerActions;
  payload: DateEvent | DateEvent[];
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
      let dateEvent = action.payload as DateEvent;
      dateEvents.push(dateEvent);
      return { ...state, dateEvents };
    }
    case DateEventReducerActions.DeleteEvent: {
      let { dateEvents } = state;
      let dateEvent = action.payload as DateEvent;
      dateEvents = dateEvents.filter(de => de.id !== dateEvent.id);
      return { ...state, dateEvents };
    }
    case DateEventReducerActions.SetEvents: {
      let dateEvents = action.payload as DateEvent[];
      dateEvents.forEach(de => (de.date = new Date(de.date)));
      return { ...state, dateEvents, loaded: true };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DateEventProvider({ children }: DateEventProviderProps) {
  const [state, dispatch] = React.useReducer(dateEventReducer, {
    loaded: false,
    dateEvents: []
  });

  useEffect(() => {
    async function hydrate() {
      if (!state.loaded) {
        let cache = (await localForage.getItem(DATE_EVENT_STORE_KEY)) as string;
        if (cache) {
          let dateEvents: DateEvent[] = JSON.parse(cache);
          dispatch({
            type: DateEventReducerActions.SetEvents,
            payload: dateEvents
          });
        }
      }
    }

    async function persist() {
      await localForage.setItem(
        DATE_EVENT_STORE_KEY,
        JSON.stringify(state.dateEvents)
      );
    }

    hydrate();
    return () => {
      persist();
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
