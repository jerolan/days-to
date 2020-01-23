import React from "react";

const Field: React.FunctionComponent<React.HTMLProps<HTMLInputElement>> = ({
  label,
  name,
  ...props
}) => {
  return (
    <div>
      <div className="py-1">
        <label className="font-light" htmlFor={name}>
          {label}
        </label>
      </div>
      <div className="overflow-hidden py-1 bg-gray-300 rounded">
        <input
          className="w-full bg-gray-300 font-bold py-2 px-4"
          id={name}
          name={name}
          {...props}
        />
      </div>
    </div>
  );
};

export default Field;
