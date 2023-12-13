export default function Stats({ addTasks }) {
  const totalTasks = addTasks.length;
  const completedTasks = addTasks.filter((task) => task.isComplete).length;
  const pendingTasks = totalTasks - completedTasks;
  return totalTasks === completedTasks ? (
    <div className="all-done"> Great Job! You are good for the Day.</div>
  ) : (
    <table class="table">
      <thead>
        <th scope="col">Total Tasks</th>
        <th scope="col">Completed Tasks</th>
        <th scope="col">Pending Tasks</th>
      </thead>
      <tbody>
        <tr>
          <td className="total-tasks">{totalTasks}</td>
          <td className="completed-task">{completedTasks}</td>
          <td className="pending-task">{pendingTasks}</td>
        </tr>
      </tbody>
    </table>
  );
}
