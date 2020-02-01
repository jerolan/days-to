import React from "react";
import { NextPage } from "next";
import emoji from "node-emoji";

import daysBetweenTwoDates from "../utils/daysBetweenTwoDates";
import Layout from "../components/Layout";
import Event from "../components/Event";

type EventQuery = {
  title: string;
  emoji: string;
  date: string;
};

function parseEventFromQuery(query: EventQuery) {
  return {
    title: query.title as string,
    emoji: query.emoji || emoji.random().emoji,
    date: new Date(query.date)
  };
}

const EventDisplay: NextPage<{ eventQuery: EventQuery }> = ({ eventQuery }) => {
  const today = new Date();
  const event = parseEventFromQuery(eventQuery);

  return (
    <Layout
      title={`${event.title} - in ${daysBetweenTwoDates(
        today,
        event.date
      )} days`}
    >
      <Event title={event.title} emoji={event.emoji} date={event.date} />
    </Layout>
  );
};

EventDisplay.getInitialProps = function(context) {
  const { title, date, emoji } = context.query;

  return {
    eventQuery: {
      title: title as string,
      emoji: emoji as string,
      date: date as string
    }
  };
};

export default EventDisplay;
