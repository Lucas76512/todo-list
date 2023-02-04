import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import "./Button.css";
import plus from "../../assets/plus.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

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
