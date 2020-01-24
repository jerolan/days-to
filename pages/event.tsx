import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import emoji from "node-emoji";

import daysBetweenTwoDates from "../utils/daysBetweenTwoDates";
import MainLayout from "../components/MainLayout";
import Event from "../components/Event";

export default function EventDisplay() {
  const today = new Date();
  const { query } = useRouter();

  const event = {
    title: query.title as string,
    emoji: query.emoji ? (query.emoji as string) : emoji.random().emoji,
    date: new Date(query.date as string)
  };

  return (
    <MainLayout>
      <Head>
        <title>
          {event.title} - in {daysBetweenTwoDates(today, event.date)} days
        </title>
      </Head>
      <Event title={event.title} emoji={event.emoji} date={event.date} />
    </MainLayout>
  );
}
