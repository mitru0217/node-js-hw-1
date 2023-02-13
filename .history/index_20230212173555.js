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
    // case "add":
    //     const newProduct = await productsOperations.add(data);
    //     console.log(newProduct);
    //     break;
    // case "updateById":
    //     const updateProduct = await productsOperations.updateById(id, data);
    //     if(!updateProduct){
    //         throw new Error(`Product with id=${id} not found`);
    //     }
    //     console.log(updateProduct);
    //     break;
    // case "removeById":
    //     const removeProduct = await productsOperations.removeById(id);
    //     console.log(removeProduct);
    //     break;
    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "listContacts" });
const id = "8";
invokeAction({ action: "getContactById", id });
