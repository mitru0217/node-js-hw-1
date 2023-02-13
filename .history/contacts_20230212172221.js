const fs = require("fs/promises");

const contactsPath = require("./db");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

// const getAll = async()=> {
//   const data = await fs.readFile(filePath);
//   const products = JSON.parse(data);
//   return products;
// }

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
