import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  let contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  const dataBase = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const contactsParse = JSON.parse(dataBase);

  contactsParse.push(...contacts);
  await fs.writeFile(PATH_DB, JSON.stringify(contactsParse, null, 2), {
    encoding: 'utf8',
  });
  return contactsParse;
};
generateContacts(5)
  .then(() => console.log('Generated contacts'))
  .catch((err) => console.error(err));
