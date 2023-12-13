export function Task({ task, onDeleteTask, index, onCompleteTask }) {
  return (
    // <li className={task.isComplete ? "complete-task " : ""}>
    //   <p>{index}</p>
    //   <p>{task.taskName}</p>
    //   <p>{task.isComplete ? "Completed" : "In Progress"}</p>
    //   <div className="btns">
    //     <button
    //       className="btn btn-danger"
    //       onClick={
    //         !task.isComplete
    //           ? () => {
    //               onDeleteTask(task.sn);
    //             }
    //           : null
    //       }
    //     >
    //       Delete
    //     </button>

    //     <button
    //       className="btn btn-success"
    //       onClick={() => {
    //         onCompleteTask(task.sn);
    //       }}
    //     >
    //       {task.isComplete ? "Mark as InComplete" : "Mark as Complete"}
    //     </button>
    //   </div>
    // </li>

    <tr className={task.isComplete ? "complete-task " : ""}>
      <td>
        <p>{index}</p>
      </td>
      <td className="task-name">
        <p>{task.taskName}</p>
      </td>
      <td>
        <p>{task.isComplete ? "Completed" : "In Progress"}</p>
      </td>
      <td>
        <div className="btns">
          <button
            className="btn btn-danger"
            onClick={
              !task.isComplete
                ? () => {
                    onDeleteTask(task.sn);
                  }
                : null
            }
          >
            Delete
          </button>

          <button
            className="btn btn-success"
            onClick={() => {
              onCompleteTask(task.sn);
            }}
          >
            {task.isComplete ? "Mark As InComplete" : "Mark As Complete"}
          </button>
        </div>
      </td>
    </tr>
  );
}
