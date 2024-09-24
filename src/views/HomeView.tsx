import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../database/todoDB';
import TodoInput from '../components/todos/TodoInput';
import TodoItemContainer from '../components/todos/TodoItemContainer';
import TodoHeading from '../components/todos/TodoHeading';
import TodoEmpty from '../components/todos/TodoIsEmpty';

export default function HomeView() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromDB = await getTodos();
      setTodos(todosFromDB);
    };

    (async () => {
      await fetchTodos();
    })();
  }, []);

  const onAddTodoHandler = async (task: string) => {
    if (task.trim()) {
      const id = await addTodo({
        task: task,
        completed: false,
        createdAt: new Date().toISOString(),
      });

      setTodos([
        ...todos,
        { id, task, completed: false, createdAt: new Date().toISOString() },
      ]);
    }
  };

  const onDeleteTodoHandler = async (id: number) => {
    const todo: Todo[] = todos?.filter((todo) => todo.id !== id);
    await deleteTodo(id);
    setTodos(todo);
  };

  const onToggleTodoHandler = async (id: number) => {
    const todoToggle = todos.find((todo) => todo.id === id);
    if (todoToggle) {
      await updateTodo(id, { ...todoToggle, completed: !todoToggle.completed });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  const todosCompletedData: Todo[] = todos
    ?.filter((todo) => todo.completed)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const todosUnCompletedData: Todo[] = todos
    ?.filter((todo) => !todo.completed)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const content = (
    <>
      <div className="todo-container">
        <div className="todo-input-container">
          <TodoInput submitForm={onAddTodoHandler} />
        </div>

        {todos.length ? (
          <>
            <div className="todo-uncomplete">
              <TodoItemContainer
                todos={todosUnCompletedData}
                onDelete={onDeleteTodoHandler}
                onCompleted={onToggleTodoHandler}
              />
            </div>
            {/* Todo uncomplete container start */}
            {todosCompletedData.length >= 1 && (
              <div className="todo-complete">
                <TodoHeading
                  heading={` Selesai (${todosCompletedData.length})`}
                />
                <TodoItemContainer
                  todos={todosCompletedData}
                  onDelete={onDeleteTodoHandler}
                  onCompleted={onToggleTodoHandler}
                />
              </div>
            )}

            {/* Todo uncomplete container end */}
          </>
        ) : (
          <TodoEmpty
            image="/icons/web-search-concept-illustration.png"
            text="Belum Ada Daftar Tugas."
          />
        )}
      </div>
    </>
  );

  return content;
}
