import { PATH_DB } from '../constants/contacts.js';
import dataBase from '../db/db.json' assert { type: 'json' };

export const countContacts = async () => {
  if (dataBase) {
    return dataBase.length;
  }
};

console.log(await countContacts());
