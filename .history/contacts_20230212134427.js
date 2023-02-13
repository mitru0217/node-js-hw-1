const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("contacts.json");

function listContacts() {
  const readFile = async () => {
    const text = await fs.readFile(contactsPath, "utf-8");
    console.log(text);
    return readFile;
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
