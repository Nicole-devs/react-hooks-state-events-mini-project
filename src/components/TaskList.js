import React from "react";

function TaskList({ tasks, onDeleteTask }) {

  return (

    <div className="tasks">
      {tasks.map((task) => (
        <task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask} />
      ))}
    </div>

  );
}

export default TaskList;
