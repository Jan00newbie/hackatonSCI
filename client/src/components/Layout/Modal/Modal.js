import React from "react";
import { createPortal } from "react-dom";
import style from './modal.module.scss'

import { useHistory } from "react-router-dom";

const Modal = ({ children }) => {
  const history = useHistory()
  
  const handleBack = (e) => {
    e.preventDefault()
    history.goBack()
  }

  return createPortal(
    <div className={style.modal}>
      <div className={style.content}>
        {children}
        <button className={'btn_red'} onClick={handleBack}>Zamknij</button>
      </div>
    </div>,
    document.querySelector('#modal_root')
  );
}


export default Modal