import "./Global.css";
import { Header } from "./components/Header";

import { TaskBadge } from "./components/TaskBadge";
import { TaskWrapper } from "./components/TaskWrapper";

export function App() {
  return (
    <div>
      <Header />
      <TaskWrapper />
      <div>
        {/* <TaskBadge label="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." /> */}
      </div>
    </div>
  );
}
