import React, { useRef, useImperativeHandle } from "react";

import classes from "./Button.module.css";

const Button = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: focus,
    };
  });

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled || false}
      ref={inputRef}
      name="nalskdnalksdn"
    >
      {props.children}
    </button>
  );
});

export default Button;
