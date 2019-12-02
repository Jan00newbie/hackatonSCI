import React, { useContext } from "react";

import authContext from "../../../context/auth/authContext";
import Form from "../../Layout/Form/Form";

const formSeed = [
  { type: "text", text: "Email", name: "email" },
  { type: "text", text: "Hasło", name: "password" }
];

const Login = () => {
  const { login } = useContext(authContext);
  return <Form seed={formSeed} onSubmit={login} text="Zaloguj" />;
};

export default Login;
