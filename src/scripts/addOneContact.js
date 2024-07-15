import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const oneContact = createFakeContact();
  const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(dataBase);
  contacts.push(oneContact);
  await fs.writeFile(PATH_DB, JSON.stringify([...contacts], null, 2), {
    encoding: 'utf-8',
  });
  return contacts;
};

addOneContact()
  .then(() => console.log('Contact has been added successfully.'))
  .catch((err) => console.error(err));
