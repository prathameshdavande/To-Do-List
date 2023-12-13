import { useState } from "react";
import { FormAddTask } from "./FormAddTask";
import { TaskList } from "./TaskList";
import Stats from "./Stats";

const empDetails = [
  {
    sn: 1,

    taskName: "Buy groceries for next week",
    status: "In Progress",
    isComplete: false,
  },
  {
    sn: 2,

    taskName: "Renew car insurance",
    status: "In Progress",
    isComplete: false,
  },
  {
    sn: 3,

    taskName: "Sign up for online course",
    status: "In Progress",
    isComplete: false,
  },
];
export default function App() {
  const [addTasks, setAddTask] = useState(empDetails);
  const totalTasks = addTasks.length;
  console.log(totalTasks);
  function handleAddTask(addTask) {
    setAddTask((addTasks) => [...addTasks, addTask]);
  }

  function handleDeleteFriend(sn) {
    setAddTask((task) => task.filter((task) => task.sn !== sn));
  }

  function handleCompleteTask(sn) {
    setAddTask((task) =>
      task.map((task) =>
        task.sn === sn ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  function handleCompletedTask(sn) {
    setAddTask((task) =>
      task.map((task) =>
        task.isComplete
          ? { ...task, isComplete: false, status: "In Progress" }
          : task
      )
    );
  }

  return (
    <div className="container">
      <div className="form-add-task">
        <FormAddTask onAddTask={handleAddTask} addTasks={addTasks} />
      </div>
      <div className="task-stats">
        <TaskList
          addTasks={addTasks}
          onDeleteTask={handleDeleteFriend}
          onCompleteTask={handleCompleteTask}
          onCompletedTask={handleCompletedTask}
          setAddTask={setAddTask}
        />
        <div>
          <Stats
            addTasks={addTasks}
            setAddTask={setAddTask}
            onDeleteTask={handleDeleteFriend}
            onCompleteTask={handleCompleteTask}
            totalTasks={totalTasks}
          />
        </div>
      </div>
    </div>
  );
}
