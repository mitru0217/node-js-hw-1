const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "list":
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
    case "add":
      const newProduct = await contactsOperations.addContact(data);
      console.log(newProduct);
      break;
    case "remove":
      const removedContact = await contactsOperations.removeContact(id);
      if (!removedContact) {
        throw new Error(`Contact with id=${id} has been removed before`);
      }
      console.log(removedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const id = "5";

invokeAction({ action: "getContactById", id });

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);

// invokeAction(argv);
