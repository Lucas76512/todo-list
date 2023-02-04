import React from "react";
import "./Header.css";
import todoLogo from "../../assets/todo-logo.svg";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <img src={todoLogo} alt="logotipo todo" />
      </header>
      <div className="search-wrapper">
        <Input />
        <Button id="create-task-button" label="Criar" />
      </div>
    </div>
  );
}
