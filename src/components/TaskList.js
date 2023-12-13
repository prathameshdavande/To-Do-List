import { Task } from "./Task";

export function TaskList({
  addTasks,
  onDeleteTask,
  onCompleteTask,
  setAddTask,
}) {
  let sortedItems = addTasks;

  // sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed));
  sortedItems = addTasks.sort((a, b) => a.isComplete - b.isComplete);
  console.log(sortedItems);
  return (
    // <ul className="tasks">
    //   {sortedItems.map((task, i) => (
    //     <Task
    //       task={task}
    //       key={task.sn}
    //       index={i + 1}
    //       onDeleteTask={onDeleteTask}
    //       onCompleteTask={onCompleteTask}
    //     />
    //   ))}
    // </ul>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col" className="task-name">
            Task Name
          </th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
        {sortedItems.map((task, i) => (
          <Task
            task={task}
            key={task.sn}
            index={i + 1}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
          />
        ))}
      </tbody>
    </table>
  );
}
