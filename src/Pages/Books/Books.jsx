import { use } from "react"
import Book from "../../Components/Book"


export default function Books({promiseBooks}) {
    const booksData = use(promiseBooks)
  return (
    <div className="my-20">
        <h1 className="text-3xl text-center m-4">Books : {booksData?.length}</h1>
        <hr />
        <div className="grid lg:grid-cols-3 my-10 gap-5">
            {
                booksData.map(bookData=><Book key={bookData?.bookId} bookData={bookData}></Book>)
            }
        </div>
    </div>
  )
}
