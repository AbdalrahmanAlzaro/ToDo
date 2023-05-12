import React, { useState, useEffect } from 'react';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('Normal');
    const [taskStatusFilter, setTaskStatusFilter] = useState('All');
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        // Save tasks to local storage whenever tasks change
        localStorage.setItem('tasks', JSON.stringify(tasks));
        filterTasksByStatus();
    }, [tasks]);
    
    useEffect(() => {
        // Load tasks from local storage on component mount
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
            setFilteredTasks(savedTasks);
        }
    }, []);

    

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleTaskDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    };

    const handleTaskPriorityChange = (e) => {
        setTaskPriority(e.target.value);
    };

    const handleTaskStatusFilterChange = (e) => {
        setTaskStatusFilter(e.target.value);
        filterTasksByStatus(e.target.value);
    };

    const handleThemeChange = () => {

        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleSaveTask = () => {
        if (taskTitle === '') {
            alert('Please enter a task title.');
            return;
        }

        const newTask = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            priority: taskPriority,
            status: 'Incomplete',
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTaskTitle('');
        setTaskDescription('');
        setTaskPriority('Normal');
    };

    const handleTaskStatusChange = (taskId, newStatus) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleClearCompletedTasks = () => {
        const updatedTasks = tasks.filter((task) => task.status !== 'Complete');
        setTasks(updatedTasks);
    };

    const filterTasksByStatus = (status = taskStatusFilter) => {
        if (status === 'All') {
            setFilteredTasks(tasks);
        } else {
            const filtered = tasks.filter((task) => task.status === status);
            setFilteredTasks(filtered);
        }

        // const tasksInfo =localStorage.Item('tasks', JSON.parse(task));
    };

    return (
        <div className={`task-page ${theme} taskForm`}>
            <h1>Task Page</h1>

            {/* Task Form */}
            <form>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={handleTaskTitleChange}
                    placeholder="Task Title"
                />
                <textarea
                    value={taskDescription}
                    onChange={handleTaskDescriptionChange}
                    placeholder="Task Description"
                />
                <select value={taskPriority} onChange={handleTaskPriorityChange}>
                    <option value="Critical">Critical</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                </select>
                <button type="button" onClick={handleSaveTask}>Save</button>
            </form>

            {/* Task Filter */}
            <div>
                <select value={taskStatusFilter} onChange={handleTaskStatusFilterChange}>
                    <option value="All">All</option>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
            </div>

            {/* Task List */}
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <div>
                            <h3>Title: {task.title}</h3>
                            <p>Description: {task.description}</p>
                            <p>Priority: {task.priority}</p>
                            <p>Status: {task.status}</p>
                        </div>
                        <div>
                            <button onClick={() => handleTaskStatusChange(task.id, 'Complete')}>Complete</button>
                            <button onClick={() => handleTaskStatusChange(task.id, 'Incomplete')}>Incomplete</button>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Clear Completed Tasks */}
            <button onClick={handleClearCompletedTasks}>Clear Completed Tasks</button>

            {/* Theme Toggle */}
            <button onClick={handleThemeChange}>Switch theme</button>
        </div>
    );
};

export default TaskPage;

