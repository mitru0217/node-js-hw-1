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
// const id = "8";
// invokeAction({ action: "getContactById", id });

const newContact = {
  id: "11",
  name: "Mike Adams",
  email: "mike123@mail.com",
  phone: "(123) 345-34-56",
};
invokeAction({ action: "addContact", data: newContact });
