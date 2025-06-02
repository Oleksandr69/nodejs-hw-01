import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    let contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await getAllContacts());
