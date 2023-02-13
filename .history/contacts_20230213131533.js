const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const contactsPath = require("./db");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find((el) => el.id === id);
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(id) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => (contact.id = id));
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = { ...data, id: uuidv4() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
}
module.exports = { listContacts, getContactById, addContact, removeContact };
