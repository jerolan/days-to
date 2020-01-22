import React from "react";

const events = [
  {
    id: 1,
    title: "some title",
    date: new Date(2020, 1, 4)
  },
  {
    id: 2,
    title: "some title 2",
    date: new Date(2020, 0, 31)
  }
];

function daysBetweenTwoDates(date1: Date, date2: Date) {
  const dayInMs = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1.getTime() - date2.getTime()) / dayInMs));
}

export default function Home() {
  const today = new Date();

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <p>{event.title}</p>
          <p>{daysBetweenTwoDates(today, event.date)}</p>
        </div>
      ))}
    </div>
  );
}
