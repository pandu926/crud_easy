const data = []; //save data to array/object

function createItem(item) {
  data.push(item);
  return item;
}

function getAllItems() {
  return data;
}

function getItemById(id) {
  return data.find((item) => item.id === id);
}

function updateItem(id, updatedItem) {
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedItem };
    return data[index];
  }
  return null;
}

function deleteItem(id) {
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = data.splice(index, 1);
    return deletedItem[0];
  }
  return null;
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
