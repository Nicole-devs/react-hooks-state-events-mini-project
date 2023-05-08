import React, { useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App({ taskData, categories }) {

  const [tasks, setTasks] = useState(taskData);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleDeleteTask = (deletedTaskText) => {
    setTasks(tasks.filter(task => task.text !== deletedTaskText));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // const filteredItems = items.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

  const visibleTasks = tasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory);


  return (

    <div className="App">

    <div className="task">

          {visibleTasks.map((task) => (
          <task key={task.text} text={task.text} category={task.category} onDelete={onDelete} />
          ))}

    </div>

      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <NewTaskForm categories={categories.filter(category => category !== 'All')} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>

  );
}
 
export default App;
