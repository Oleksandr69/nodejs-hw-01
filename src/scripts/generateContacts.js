import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      contacts = [...contacts, createFakeContact()];
    }
    writeContacts(JSON.stringify(contacts));
  } catch (err) {
    console.error('Помилка:', err);
  }
};

generateContacts(5);
