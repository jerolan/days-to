import React from "react";
import classnames from "classnames";

import Layout from "../Layout";

type EventFormLayout = {
  show: boolean;
};

const EventFormBackground: React.FunctionComponent<EventFormLayout> = ({
  show,
  children
}) => {
  const className = classnames("absolute bg-black", {
    hidden: !show,
    "flex animated fadeIn inset-0": show
  });

  return <div className={className}>{children} </div>;
};

const EventFormWrapper: React.FunctionComponent<EventFormLayout> = ({
  show,
  children
}) => {
  const className = classnames("flex-1 relative bg-white p-4", {
    "animated slideInUp": show
  });

  return <div className={className}>{children} </div>;
};

const EventFormLayout: React.FunctionComponent<EventFormLayout> = ({
  show,
  children
}) => {
  return (
    <EventFormBackground show={show}>
      <EventFormWrapper show={show}>
        <Layout>{children}</Layout>
      </EventFormWrapper>
    </EventFormBackground>
  );
};

export default EventFormLayout;
