import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Modal from "../../Layout/Modal/Modal";
import Login from "../Main/Login";
import Register from "../Main/Register";

const ModalSwitch = () => {
  const location = useLocation();
  const modal = location.state && location.state.modal;
  return modal ? (
    <Modal>
      <Switch location={modal}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Modal>
  ) : null;
};

export default ModalSwitch;
