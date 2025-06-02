import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    contacts.pop();
    writeContacts(JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка видалення останнього контакту:', err);
  }
};

removeLastContact();
