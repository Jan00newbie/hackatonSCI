import React, { useState } from "react";
import InputText from "../InputText/InputText";
import { RadioBool } from "../RadioBool/RadioBool";
import style from "./form.module.scss";

const formSeed = [
  { type: "text", text: "Email", name: "email" },
  { type: "text", text: "Hasło", name: "password" },
  { type: "text", text: "Imię", name: "firstName" },
  { type: "text", text: "Nazwisko", name: "lastName" },
  { type: "text", text: "Miasto", name: "city" }
  // { node: Number, text: "Wiek", name: "birthYear" },
  // { node: RadioBool, text: ["Mężczyzna", "Kobieta"], name: "isMale" }
];

const INPUT = Object.freeze({
  text: {
    node: InputText,
    value: ""
  },
  bool: {
    node: RadioBool,
    value: true
  }
});

const Form = ({ seed, onSubmit, text }) => {
  const initialState = seed.reduce(
    (prev, { name, type }) => ({ ...prev, [name]: INPUT[type].value }),
    {}
  );

  const [input, setInput] = useState(initialState);

  const handleChange = e => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
  };

  const inputNodes = seed.map(({ type, text, name }, index) => {
    return React.createElement(INPUT[type].node, {
      text,
      name,
      key: index,
      onChange: handleChange,
      value: input[name]
    });
  });

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {inputNodes}
      <button type="submit">{text}</button>
    </form>
  );
};

export default Form;
