interface Todo {
  id: string | number;
  tasks: string;
  completed: TodoCompleted;
  deadline?: string;
  createdAt: string;
}

type TodoCompleted = 'completed' | 'uncompleted';
