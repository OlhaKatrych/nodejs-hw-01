import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import dataBase from '../db/db.json' assert { type: 'json' };

export const addOneContact = async () => {
  const oneContact = createFakeContact();
  console.log(oneContact);
  dataBase.push(oneContact);
  console.log(dataBase);
  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...dataBase], null, 2),
    {
      encoding: 'utf-8',
    },
  );
  return dataBase;
};

addOneContact();
