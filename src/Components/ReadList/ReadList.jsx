import { useEffect, useState } from "react";
import { getStoredBook } from "../../utility/addToDb";
import Book from "../Book";

export default function ReadList({ data,handleSort }) {
  const [read, setRead] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoreBookData = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoreBookData.includes(book.bookId)
    );

    setRead(myReadList);
  }, [data]); 

  return (
    <div className="grid lg:grid-cols-3">
      {read.map((bookData) => (
        <Book key={bookData?.bookId} bookData={bookData} handleSort={handleSort}></Book>
      ))}
    </div>
  );
}