// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask,deleteTask } from '../redux/actions';
import '../App.css'

const Task = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, editedDescription));
    setEditMode(false);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className="task">
      {editMode ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Task;
