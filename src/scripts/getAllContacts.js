import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import dataBase from '../db/db.json' assert { type: 'json' };

export const getAllContacts = async () => {
  return await fs.readFile(PATH_DB, { encoding: 'utf-8' });
};

console.log(await getAllContacts());
getAllContacts()
  .then(() => console.log('Successfully loaded all contacts'))
  .catch((err) => console.error(err));
