// https://64859281a795d24810b7146a.mockapi.io/work/:endpoint
import axios from 'axios';

const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work';

async function fetchContacts() {
  return await axios.get(`${BASE_URL}/contacts`);
}

async function fetchContactsById(id) {
  return await axios.get(`${BASE_URL}/contacts/${id}`);
}
async function deleteContactsById(id) {
  return await axios.delete(`${BASE_URL}/contacts/${id}`);
}

async function createContact(data) {
  return await axios.post(`${BASE_URL}/contacts`, data);
}

async function changeFullContact(id, data) {
  return await axios.put(`${BASE_URL}/contacts/${id}`, data);
}

export { fetchContacts, fetchContactsById, deleteContactsById, createContact, changeFullContact  };
