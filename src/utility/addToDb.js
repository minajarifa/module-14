const getStoredBook = () => {
  const storeBookSTR = localStorage.getItem("readList");
  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};
const addToStoredDb = (id) => {
  const storeBooksData = getStoredBook();
  if (storeBooksData.includes(id)) {
    alert("id agei ache ");
  } else {
    storeBooksData.push(id);
    const data = JSON.stringify(storeBooksData);
    localStorage.setItem("readList", data);
  }
};
export { addToStoredDb };
