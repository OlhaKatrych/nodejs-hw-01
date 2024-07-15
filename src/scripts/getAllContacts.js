import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contacts = JSON.parse(dataBase);
  return contacts;
};

console.log(await getAllContacts());
