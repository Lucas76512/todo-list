import React from "react";
import "./Button.css";
import plus from "../../assets/icons/plus.svg";
import { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const { label, ...rest } = props;

  return (
    <div className="newtask">
      <button className="button" {...rest}>
        <p className="criar">{label}</p>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}
