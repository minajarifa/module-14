import { useLoaderData } from "react-router";
import ReadList from "../../Components/ReadList/ReadList";
import WishList from "../../Components/WishList/WishList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
export default function ListedBooks() {
  const data = useLoaderData();
  const [sort,setSort]=useState("")
  const handleSort =(type)=>{
setSort(type)
  }
  return (
    <div className="text-center">
      <details className="dropdown my-10">
        <summary className="btn m-1">{sort?sort:""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort(sort)}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort()}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadList data={data}
          handleSort={handleSort} />
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
}
