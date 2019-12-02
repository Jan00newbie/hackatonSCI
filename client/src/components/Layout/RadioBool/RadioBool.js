import React, { Fragment } from "react";

export const RadioBool = ({ text, onChange, name, value: isOpen }) => {
  const handleCheck = e => {
    e.preventDefault();
    const value = e.target.value === "true";
    const event = {
      ...e,
      target: { ...e.target, name, value },
      preventDefault: () => {}
    };
    onChange(event);
  };

  return (
    <Fragment>
      <label>
        {text[0]}
        <input
          type="radio"
          onChange={handleCheck}
          name={name}
          value="true"
          checked={isOpen}
        />
      </label>
      <label>
        {text[1]}
        <input
          type="radio"
          onChange={handleCheck}
          name={name}
          value="false"
          checked={isOpen}
        />
      </label>
    </Fragment>
  );
};
