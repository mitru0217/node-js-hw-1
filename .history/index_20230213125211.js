const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "addContact":
      const newProduct = await contactsOperations.addContact(data);
      console.log(newProduct);
      break;
    case "removeContact":
      const removedContact = await contactsOperations.removeContact(id);
      if (!removedContact) {
        throw new Error(`Contact with id=${id} has been removed before`);
      }
      console.log(removedContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "listContacts" });
// const id = "8";
// invokeAction({ action: "getContactById", id });

// const newContact = {
//   name: "Mike Adams",
//   email: "mike123@mail.com",
//   phone: "(123) 345-34-56",
// };
// invokeAction({ action: "addContact", data: newContact });
// const idx = "10";
// invokeAction({ action: "removeContact", id: idx });
const arr = hideBin(process.argv);
console.log(arr);
