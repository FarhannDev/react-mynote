const todos: Todo[] = [
  {
    id: 1,
    task: 'Ini adalah tugas pertama',
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    task: 'Ini adalah tugas kedua',
    completed: true,
    deadline: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    task: 'Ini adalah tugas ketiga',
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export default todos;
