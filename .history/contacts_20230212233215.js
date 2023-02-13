const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const contactsPath = require("./db");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((el) => el.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

// function removeContact(contactId) {}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = contacts.push(data);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}
module.exports = { listContacts, getContactById, addContact };
