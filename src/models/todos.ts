const todos: Todo[] = [
  {
    id: 1,
    tasks: 'Ini adalah tugas pertama',
    completed: 'uncompleted',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    tasks: 'Ini adalah tugas kedua',
    completed: 'completed',
    deadline: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    tasks: 'Ini adalah tugas ketiga',
    completed: 'completed',
    createdAt: new Date().toISOString(),
  },
];

export default todos;
