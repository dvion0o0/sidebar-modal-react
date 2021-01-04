import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ openModal }) => {
  const [show, setShow] = React.useState(false);
  console.log(openModal);
  return (
    <div className={openModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <button className="close-modal-btn" onClick={() => setShow(false)}>
          <FaTimes />
        </button>
        <h3>modal content</h3>
      </div>
    </div>
  );
};

export default Modal;
