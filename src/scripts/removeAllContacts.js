import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import dataBase from '../db/db.json' assert { type: 'json' };

export const removeAllContacts = async () => {
  dataBase.splice(0, dataBase.length);

  await fs.writeFile(PATH_DB, JSON.stringify(dataBase, null, 2), {
    encoding: 'utf-8',
  });
};

removeAllContacts()
  .then(() => console.log('Remove all contacts'))
  .catch((err) => console.error(err));
