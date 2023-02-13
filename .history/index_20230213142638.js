const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
// const { Command } = require("commander");
// const program = new Command();
const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.list();
      console.log(contacts);
      break;
    case "get":
      const contact = await contactsOperations.get(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "add":
      const newProduct = await contactsOperations.addContact(
        name,
        email,
        phone
      );
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

// const id = "5";

// invokeAction({ action: "getContactById", id });

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);

// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();
// invokeAction(argv);
