import { Suspense } from "react";
import Banner from "../../Layout/Banner/Banner";
import Books from "../Books/Books";


export default function House() {
  const promiseBooks = fetch(`/booksData.json`).then(res=>res.json())
  return (
    <div>
        <div className="mx-20">

        <Banner/>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
<Books promiseBooks={promiseBooks}></Books>
        </Suspense>
        </div>
    </div>
  )
}
