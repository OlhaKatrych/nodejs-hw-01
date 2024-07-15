import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const removeLastContact = async () => {
  const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(dataBase);
  if (contacts.length > 0) {
    contacts.pop();
  }
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), {
    encoding: 'utf-8',
  });
};

removeLastContact()
  .then(() => console.log('Remove the last contact'))
  .catch((err) => console.error(err));
