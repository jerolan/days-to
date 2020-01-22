import React from "react";
import classnames from "classnames";

const EventFormWrapper: React.FunctionComponent<{ show: boolean }> = ({
  show,
  children
}) => {
  const className = classnames("flex-1 relative bg-white p-4", {
    "animated slideInUp": show
  });

  return <div className={className}>{children}</div>;
};

export default EventFormWrapper;
