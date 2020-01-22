import React from "react";

const Field: React.FunctionComponent<React.HTMLProps<HTMLInputElement>> = ({
  label,
  name,
  ...props
}) => {
  return (
    <div className="w-full">
      <div className="py-1">
        <label className="font-light" htmlFor={name}>
          {label}
        </label>
      </div>
      <div className="py-1">
        <input className="w-full bg-gray-300 font-bold py-2 px-4 rounded" id={name} name={name} {...props} />
      </div>
    </div>
  );
};

export default Field;
