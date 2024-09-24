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

export const addTodo = async (newTodo: Todo) => {
  try {
    const db: IDBPDatabase<TodoDB> = await dbPromise;
    return db.add(STORE_NAME, newTodo);
  } catch (error) {
    console.error('Failed to add new todo:', error);
    throw new Error('Failed to add todo. Please try again.');
  }
};

export const getTodos = async () => {
  try {
    const db: IDBPDatabase<TodoDB> = await dbPromise;
    return db.getAll('todos');
  } catch (error) {
    console.error('Failed to retrieve todos:', error);
    throw new Error('Failed to retrieve todos. Please try again.');
  }
};

export const updateTodo = async (id: number, updateTodo: Todo) => {
  try {
    const db: IDBPDatabase<TodoDB> = await dbPromise;
    const todo = await db.get(STORE_NAME, id);
    if (todo) {
      await db.put(STORE_NAME, { id, ...updateTodo });
    }
  } catch (error) {
    console.error('Failed to add new todos:', error);
    throw new Error('Failed to add todos. Please try again.');
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const db: IDBPDatabase<TodoDB> = await dbPromise;
    return await db.delete(STORE_NAME, id);
  } catch (error) {
    console.error(`Failed to delete todos with id ${id}:`, error);
    throw new Error('Failed to delete todos. Please try again.');
  }
};
