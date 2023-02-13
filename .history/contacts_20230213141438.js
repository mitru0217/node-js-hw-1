const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const contactsPath = require("./db");

const update = async (id, name, email, phone) => {
  await fs.writeFile(contactsPath, JSON.stringify(id, name, email, phone));
};

async function list() {
  const { id, name, email, phone } = await fs.readFile(contactsPath);
  const contacts = JSON.parse(id, name, email, phone);
  return contacts;
}

async function get(id) {
  const contacts = await list();
  const result = contacts.find((el) => el.id === id);
  if (!result) {
    return null;
  }
  return result;
}

async function remove(id) {
  const contacts = await list();
  const idx = contacts.findIndex((contact) => (contact.id = id));
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await update(contacts);
  return removeContact;
}

async function add(name, email, phone) {
  const contacts = await list();
  const newContact = { name, email, phone, id: uuidv4() };
  contacts.push(newContact);
  await update(contacts);
  return newContact;
}
module.exports = { list, get, add, remove };
