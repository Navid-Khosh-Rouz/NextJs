import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const ToastUI = (props) => {
  const [show, setShow] = useState(props.show);
  const defaultDelay = props.delay || 3000;

  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={defaultDelay}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{props.title || "Website"}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
    </Toast>
  );
};

export default ToastUI;
