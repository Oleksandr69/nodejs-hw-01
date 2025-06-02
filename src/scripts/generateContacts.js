import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    console.log('number: ', number);
    let contacts = await readContacts();
    console.log('contacts: ', contacts);
    for (let i = 0; i < number; i++) {
      contacts = [...contacts, createFakeContact()];
    }
    console.log(contacts);
    writeContacts(JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка:', err);
  }
};

generateContacts(5);
