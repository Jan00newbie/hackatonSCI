import React from "react";
import style from "./inputText.module.scss";

const InputText = ({ text, onChange, value, name }) => (
  <label htmlFor={name}>
    {text}
    <input type="text" name={name} onChange={onChange} value={value} />
  </label>
);

export default InputText;
