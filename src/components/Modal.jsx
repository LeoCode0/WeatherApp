import React from "react";

import "../css/modal.css";

const Modal = ({ error }) => {
  let hide = "modal";
  const close = () => {
  };

  if (error) {
    return (
      <div className={hide}>
        <div className="modal__container">
          <i
            className="fas fa-times-circle modal__container--icon"
            onClick={close()}
          ></i>
          <h1 className="modal__container--title">Error</h1>
          <span className="modal__container--error">{error.message}</span>
          <p className="modal__container--message">
            Por favor escriba correctamente el nombre de la ciudad
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
