import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    writeContacts(JSON.stringify([]));
  } catch (err) {
    console.error('Помилка видалення контактів:', err);
  }
};

removeAllContacts();
