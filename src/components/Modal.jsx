import React from "react";

import "../css/modal.css";

const Modal = ({ error, modal, handleModal }) => {
  let defaultError = "No tenemos información de la ciudad ingresada";
  if (modal && error) {
    if (error.code === 1) {
      defaultError = "No tuvimos acceso a su ubicacion";
    }

    if(error.message === '11'){
      defaultError = 'Por favor encienda su ubicación para poder mandar notificaciones'
    }

    return (
      <div className="modal">
        <div className="modal__container">
          <i
            className="fas fa-times-circle modal__container--icon"
            onClick={handleModal}
            onKeyPress={handleModal}
            aria-hidden="false"
            tabIndex="0"
          ></i>
          <h1 className="modal__container--title">Error</h1>
          <p className="modal__container--message">{defaultError}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
