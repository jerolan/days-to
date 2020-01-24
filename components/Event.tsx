import React from "react";
import Link from "next/link";

import daysBetweenTwoDates from "../utils/daysBetweenTwoDates";

type EventProps = {
  emoji: string;
  title: string;
  date: Date;
};

const Event: React.FunctionComponent<EventProps> = ({ emoji, title, date }) => {
  const today = new Date();

  return (
    <Link
      href={{
        pathname: "/event",
        query: { title, date: date.toLocaleDateString(), emoji }
      }}
    >
      <a>
        <div className="overflow-hidden p-4">
          <div className="w-full">
            <div className="p-4 my-2 bg-gray-200 rounded">
              <p className="text-5xl text-center">{emoji}</p>
            </div>
            <div className="text-sm capitalize">
              <p>{title}</p>
              <p className="opacity-75">{`in ${daysBetweenTwoDates(
                today,
                date
              )} days`}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Event;
