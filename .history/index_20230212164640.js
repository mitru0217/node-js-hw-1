const contactsOperatios = require("./contacts");

const invokeAction = async () => {
  const contacts = await contactsOperatios.listContacts();
  console.log(contacts);
  return contacts;
};
invokeAction();

// const invokeAction = async({action, id, data})=> {
//     switch(action){
//         case "getAll":
//             const products = await productsOperations.getAll();
//             console.log(products);
//             break;
//         case "getById":
//             const product = await productsOperations.getById(id);
//             if(!product){
//                 throw new Error(`Product with id=${id} not found`);
//             }
//             console.log(product);
//             break;
//         case "add":
//             const newProduct = await productsOperations.add(data);
//             console.log(newProduct);
//             break;
//         case "updateById":
//             const updateProduct = await productsOperations.updateById(id, data);
//             if(!updateProduct){
//                 throw new Error(`Product with id=${id} not found`);
//             }
//             console.log(updateProduct);
//             break;
//         case "removeById":
//             const removeProduct = await productsOperations.removeById(id);
//             console.log(removeProduct);
//             break;
//         default:
//             console.log("Unknown action");
//     }
// }
