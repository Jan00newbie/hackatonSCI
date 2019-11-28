import React from "react";
import { createPortal } from "react-dom";
import style from './modal.module.scss'
console.log(style);

const Modal = ({ children }) =>
  createPortal(
    <div className={style.modal}>
        {children}
    </div>,
    document.querySelector('#modal_root'));


export default Modal