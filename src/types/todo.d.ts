interface Todo {
  id?: number;
  task: string;
  completed: boolean;
  deadline?: string;
  createdAt: string;
}

type TodoCompleted = 'completed' | 'uncompleted';
