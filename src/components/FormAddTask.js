import { useState } from "react";

export function FormAddTask({ onAddTask, addTasks }) {
  const [taskName, setTaskName] = useState("");

  const sn = addTasks.length + 1;

  const status = "In Progress";
  function handleSubmit(e) {
    e.preventDefault();
    if (taskName) {
      const newTask = {
        sn,
        taskName,
        status,
        isComplete: false,
      };

      onAddTask(newTask);

      console.log(newTask);

      setTaskName("");
    }
  }
  // onSubmit={taskName ?  handleSubmit : null}
  // onSUbmit{(e)=> e.preventDefault(); handleSubmit}
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="New Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="btn btn-primary">Add Task</button>
    </form>
  );
}
