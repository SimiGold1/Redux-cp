// actions.js
export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const editTask = (taskId, newDescription) => {
    return {
      type: 'EDIT_TASK',
      payload: { taskId, newDescription },
    };
  };
  
  export const toggleTask = (taskId) => {
    return {
      type: 'TOGGLE_TASK',
      payload: taskId,
    };
  };

  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId,
    };
};
