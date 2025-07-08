let tasks = [];

module.exports = {
  getAll: () => tasks,

  getById: (id) => tasks.find(t => t.id === id),

  add: (task) => {
    tasks.push(task);
    return task;
  },

    update: (id, completed) => {
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
      task.completed = completed;
      return task;
    }
    return null;
  },

  delete: (id) => {
    const index = tasks.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
      const deletedTask = tasks[index];
      tasks.splice(index, 1);
      return deletedTask;
    }
    return null;
  },


};
