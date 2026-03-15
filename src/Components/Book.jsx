import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
export default function Book({ bookData ,handleSort}) {
  const {
    image,
    author,
    bookId,
    bookName,
    category,
    // publisher,
    rating,
    // review,
    tags,
    // totalPages
  } = bookData;
  console.log(bookData);
  // handleSort(bookName)
  return (
    <>
      <Link to={`/BookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={image} alt="books" className="h-56" />
          </figure>
          <div className="card-body">
            <div className="flex justify-around text-green-500">
              {tags.map((tag) => (
                <h1>{tag}</h1>
              ))}
            </div>
            <p className="text-3xl">{bookName}</p>
            <p className="text-2xl">By: {author}</p>
            <hr />
            <div className="card-actions justify-around">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline flex">
                {rating}
                <CiStar />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
