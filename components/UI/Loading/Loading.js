import React from "react";
import { Spinner } from "react-bootstrap";
import classes from "./Loading.module.css";

const LoadingUI = ({ isLoading, ...props }) => {
  {
    isLoading && console.log("asdasdasdasd");
  }

  return (
    <div className={`${classes["loading-ui-wrapper"]} ${props.className}`}>
      <div className={"d-flex m-auto flex-column"}>
        <Spinner animation="grow" variant="primary" />
        <p className="mt-3">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingUI;
