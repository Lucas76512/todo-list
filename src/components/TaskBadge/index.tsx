import React from "react";
import "./TaskBadge.css";

import trashIcon from "../../assets/icons/trash.svg";
import { ITaskBadgeProps } from "./types";

function TaskBadge(props: ITaskBadgeProps) {
  const { label } = props;
  return (
    <div className="task-badge-wrapper">
      <input type="checkbox" />
      <p>{label}</p>
      <button>
        <img src={trashIcon} alt="" />
      </button>
    </div>
  );
}

export { TaskBadge };
