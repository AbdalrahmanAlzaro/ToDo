
import React, { useState, useEffect } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Normal');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [theme, setTheme] = useState('light');

  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      status: 'Incomplete',
    };
    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
    setTaskPriority('Normal');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const changeTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => task.status === 'Incomplete');
    setTasks(updatedTasks);
  };

  const filterTasksByPriority = (priority) => {
    setFilterPriority(priority);
  };

  const filterTasksByStatus = (status) => {
    setFilterStatus(status);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterPriority === 'All' && filterStatus === 'All') {
      return true;
    }
    if (filterPriority !== 'All' && task.priority !== filterPriority) {
      return false;
    }
    if (filterStatus !== 'All' && task.status !== filterStatus) {
      return false;
    }
    return true;
  });




  return (
    <div className='aa'>
      <div className={`task-page ${theme}`}>
        <h1>Task Page</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="taskTitle">Task Title:</label>
          <input
            type="text"
            id="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />

          <label htmlFor="taskDescription">Task Description:</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />

          <label htmlFor="taskPriority">Task Priority:</label>
          <select
            id="taskPriority"
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value="Critical">Critical</option>
            <option value="Normal">Normal</option>
            <option value="Low priority">Low priority</option>
          </select>


          <button onClick={addTask} className='buttonTask' >Save</button>
        </form>
        <div>
          <label> by Priority:</label>
          <select
            value={filterPriority}
            onChange={(e) => filterTasksByPriority(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Critical">Critical</option>
            <option value="Normal">Normal</option>
            <option value="Low priority">Low priority</option>
          </select>
        </div>

        <div>
          <label> by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => filterTasksByStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </div>

        <div className="task-list">
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-item">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.status}</p>
              <button className='buttonTask' onClick={() => changeTaskStatus(task.id, 'Complete')}>
                Complete
              </button>
              <button className='buttonTask' onClick={() => changeTaskStatus(task.id, 'Incomplete')}>
                Incomplete
              </button>
              <button className='buttonTask' onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>

        <button className='buttonTask' onClick={clearCompletedTasks}>Clear Completed Tasks</button>

        <button className='buttonTask' onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default TaskPage;


