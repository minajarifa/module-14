import { useLoaderData, useParams } from "react-router";
import { addToStoredDb } from "../../utility/addToDb";

export default function BookDetails() {
  const data = useLoaderData();
  const id = useParams();
  const iD = parseInt(id.id);
  const singleData = data.find((book) => book.bookId === iD);
  const {
    image,
    author,
    bookId,
    bookName,
    category,
    publisher,
    rating,
    // review,
    tags,
    totalPages,
    yearOfPublishing,
  } = singleData;
  console.log(singleData);

  const handleMarksAsRead=(id)=>{
  addToStoredDb(id)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p>By: {author}</p>
          <p className="py-6">{category}</p>
          <hr />
          <div>
            Tags:
            <h1 className="flex justify-around text-green-500">
              {tags.map((tag) => (
                <h1>#{tag}</h1>
              ))}
            </h1>
          </div>
          <hr />
          <div>
            <h1>
              <span>Number of pages :  </span>
              {totalPages}
            </h1>
            <h1>
              <span>Publisher : </span>
              {publisher}
            </h1>
            <h1>
              <span>Year of Publisher : </span>
              {yearOfPublishing}
            </h1>
            <h1>
              <span>Reating : </span>
              {rating}
            </h1>
          </div>
          <button onClick={()=>handleMarksAsRead(bookId)} className="btn btn-active m-5">Read</button>
          <button className="btn btn-active btn-success bg-[#59C6D2] text-white m-5">
           Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
