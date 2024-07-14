import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import dataBase from '../db/db.json' assert { type: 'json' };

export const removeLastContact = async () => {
  if (dataBase.length > 0) {
    dataBase.pop();
  }
  await fs.writeFile(PATH_DB, JSON.stringify(dataBase, null, 2), {
    encoding: 'utf-8',
  });
};

removeLastContact()
  .then(() => console.log('Remove the last contact'))
  .catch((err) => console.error(err));
