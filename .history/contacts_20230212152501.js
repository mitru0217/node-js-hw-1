const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("contacts.json");

function listContacts() {
  const readFile = async () => {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    return contacts;
  };
}

//   function getContactById(contactId) {
//     // ...твой код
//   }

//   function removeContact(contactId) {
//     // ...твой код
//   }

//   function addContact(name, email, phone) {
//     // ...твой код
//   }
module.exports = { listContacts };
