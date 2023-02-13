const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return contacts;
};

//   function getContactById(contactId) {
//     // ...твой код
//   }

//   function removeContact(contactId) {
//     // ...твой код
//   }

//   function addContact(name, email, phone) {
//     // ...твой код
//   }
module.exports = listContacts;
