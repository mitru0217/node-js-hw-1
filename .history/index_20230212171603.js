const contactsOperations = require("./products");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const products = await contactsOperations.listContacts();
      console.log(products);
      break;
    // case "getById":
    //     const product = await productsOperations.getById(id);
    //     if(!product){
    //         throw new Error(`Product with id=${id} not found`);
    //     }
    //     console.log(product);
    //     break;
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

invokeAction({ action: "listContacts" });
