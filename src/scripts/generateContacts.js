import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import dataBase from '../db/db.json' assert { type: 'json' };

export const generateContacts = async (number) => {
  let contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  dataBase.push(...contacts);
  await fs.writeFile(PATH_DB, JSON.stringify(dataBase, null, 2), {
    encoding: 'utf8',
  });
  return contacts;
};
generateContacts()
  .then(() => fs.readFile(PATH_DB, { encoding: 'utf-8' }))
  .catch((err) => console.error(err));
