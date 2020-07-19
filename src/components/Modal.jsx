import React from "react";

import "../css/modal.css";

const Modal = ({ error, modal, handleModal }) => {
  let defaultError = 'Por favor escriba correctamente el nombre de la ciudad'


  if (modal && error) {

    if (error.code === 1 ){
      defaultError = 'No tuvimos acceso a su ubicacion'
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
          <span className="modal__container--error">{error.message}</span>
          <p className="modal__container--message">
            {defaultError}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
