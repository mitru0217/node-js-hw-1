const fs = require("fs/promises");

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

function removeContact(contactId) {
  // ...твой код
}

//   function addContact(name, email, phone) {
//     // ...твой код
//   }
module.exports = { listContacts, getContactById };
