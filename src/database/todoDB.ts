import { DBSchema, IDBPDatabase, openDB } from 'idb';

const DATABASE_NAME: string = import.meta.env.VITE_DATABASE_NAME;
const DATABASE_VERSION: number = import.meta.env.VITE_DATABASE_VERSION;
const STORE_NAME = 'todos';

interface TodoDB extends DBSchema {
  todos: {
    key: number;
    value: {
      id?: number;
      task: string;
      completed: boolean;
      deadline?: string;
      createdAt: string;
    };
  };
}

export const dbPromise = (async () => {
  try {
    const db = await openDB<TodoDB>(DATABASE_NAME, DATABASE_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, {
            keyPath: 'id',
            autoIncrement: true,
          });
        }
      },
    });

    return db;
  } catch (error) {
    console.error('Failed to open or upgrade the database:', error);
    throw new Error('Failed to initialize the database. Please try again.');
  }
})();

export const addTodo = async (task: string) => {
  const db: IDBPDatabase<TodoDB> = await dbPromise;
  const id = await db.add(STORE_NAME, {
    task,
    completed: false,
    createdAt: new Date().toISOString(),
  });

  return id;
};

export const getTodos = async () => {
  const db: IDBPDatabase<TodoDB> = await dbPromise;
  return db.getAll('todos');
};

export const updateTodo = async (id: number, completed: boolean) => {
  const db: IDBPDatabase<TodoDB> = await dbPromise;
  const todo = await db.get(STORE_NAME, id);
  if (todo) {
    todo.completed = completed;
    await db.put(STORE_NAME, todo);
  }
};

export const deleteTodo = async (id: number) => {
  const db: IDBPDatabase<TodoDB> = await dbPromise;
  const removeTodo = await db.delete(STORE_NAME, id);

  return removeTodo;
};
