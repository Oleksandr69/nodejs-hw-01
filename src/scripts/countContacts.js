import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log('count is: ', await countContacts());
