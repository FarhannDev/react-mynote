import { DBSchema, IDBPDatabase, openDB } from 'idb';

const DATABASE_NAME: string = import.meta.env.VITE_DATABASE_NAME;
const DATABASE_VERSION: number = import.meta.env.VITE_DATABASE_VERSION;
const STORE_NAME = 'notes';

interface NoteDB extends DBSchema {
  notes: {
    key: number;
    value: {
      id?: number;
      title: string;
      content: string;
      createdAt: string;
    };
  };
}

export const dbPromise = (async () => {
  try {
    const db = await openDB<NoteDB>(DATABASE_NAME, DATABASE_VERSION, {
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

export const addNote = async (newNote: Note) => {
  try {
    const db: IDBPDatabase<NoteDB> = await dbPromise;
    const id = await db.add(STORE_NAME, newNote);
    return id;
  } catch (error) {
    console.error('Failed to add new note:', error);
    throw new Error('Failed to add note. Please try again.');
  }
};

export const getAllNotes = async () => {
  try {
    const db: IDBPDatabase<NoteDB> = await dbPromise;
    const notes: Note[] = await db.getAll(STORE_NAME);
    return notes;
  } catch (error) {
    console.error('Failed to retrieve notes:', error);
    throw new Error('Failed to retrieve notes. Please try again.');
  }
};

export const getNote = async (id: number) => {
  try {
    const db: IDBPDatabase<NoteDB> = await dbPromise;
    const note = await db.get(STORE_NAME, id);
    return note;
  } catch (error) {
    console.error(`Failed to delete note with id ${id}:`, error);
    throw new Error('Failed to delete note. Please try again.');
  }
};

export const updateNote = async (id: number, updateNote: Note) => {
  try {
    const db: IDBPDatabase<NoteDB> = await dbPromise;
    const note = await db.get(STORE_NAME, id);
    if (note) {
      await db.put(STORE_NAME, updateNote);
    }
  } catch (error) {
    console.error('Failed to add new note:', error);
    throw new Error('Failed to add note. Please try again.');
  }
};

export const deleteNote = async (id: number) => {
  try {
    const db: IDBPDatabase<NoteDB> = await dbPromise;
    const note = await db.delete(STORE_NAME, id);
    return note;
  } catch (error) {
    console.error(`Failed to delete note with id ${id}:`, error);
    throw new Error('Failed to delete note. Please try again.');
  }
};
