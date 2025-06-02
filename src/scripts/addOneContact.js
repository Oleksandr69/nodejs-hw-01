import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const addOneContact = async () => {
  try {
    let contacts = await readContacts();
    contacts = [...contacts, createFakeContact()];
    writeContacts(JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка:', err);
  }
};
addOneContact();
