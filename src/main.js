import {
  fetchContacts,
  fetchContactsById,
  deleteContactsById,
  createContact,
  changeFullContact,
} from './js/api';

import { saveTolS, getFromLS } from './js/LS';

// fetchContacts()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// deleteContactsById(7)
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// fetchContactsById(9)
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// const clientInfo = {
//   name: 'Ihor',
//   phone: '1-311-316-4432',
// };
// let id = 25;

// createContact(clientInfo)
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// fetchContacts()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// changeFullContact(id, clientInfo)
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// fetchContacts()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

const contacts = 'contacts';
const arr = [10, 20, 30];

saveTolS(contacts, arr);
