import React, { useState, useCallback } from "react";
import { ToastContainer } from "react-bootstrap";
import ToastUI from "../UI/Toast/Toast";

const AlertContainer = () => {
  const [alerts, setAlerts] = useState([]);

  const onChange = useCallback(() => {
    let alertsCopy = Object.assign([], alerts);
    alertsCopy.push("Hi" + Date.now());
    setAlerts(alertsCopy);
  }, [alerts]);

  /* setInterval(() => {
    onChange();
    console.log(alerts);
  }, 3000); */

  return (
    <ToastContainer position="bottom-end" className="p-3">
      {alerts.map((alert, index) => {
        return (
          <ToastUI
            key={`alert-key-${index}`}
            show={true}
            delay={5000}
            title={alert}
          />
        );
      })}
    </ToastContainer>
  );
};

export default AlertContainer;
