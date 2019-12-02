import React, { useContext } from "react";

import authContext from "../../../context/auth/authContext";
import Form from "../../Layout/Form/Form";

const formSeed = [
  { type: "text", text: "Email", name: "email" },
  { type: "text", text: "Hasło", name: "password" },
  { type: "text", text: "Imię", name: "firstName" },
  { type: "text", text: "Nazwisko", name: "lastName" },
  { type: "text", text: "Miasto", name: "city" },
  // { type: "number", text: "Wiek", name: "birthYear" },
  { type: "bool", text: ["Mężczyzna", "Kobieta"], name: "isMale" }
];

const Register = () => {
  const { register } = useContext(authContext);
  return <Form seed={formSeed} onSubmit={register} text="Zarejestruj" />;
};

export default Register;
