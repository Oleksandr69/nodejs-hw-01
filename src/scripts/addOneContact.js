import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const addOneContact = async () => {
  try {
    let contacts = await readContacts();
    console.log('contacts: ', contacts);
    contacts = [...contacts, createFakeContact()];
    console.log(contacts);
    writeContacts(JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка:', err);
  }
};
addOneContact();
