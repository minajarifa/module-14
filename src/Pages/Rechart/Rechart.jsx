import { useEffect, useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
export default function Rechart() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`/booksData.json`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div>
      Rechart
      <BarChart
        data={books}
        layout="vertical"
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "100px",
          aspectRatio: 1.618,
        }}
        responsive
      >
        <YAxis type="bookName" />
        <XAxis dataKey="rating" type="category" />
        <Bar dataKey="rating" fill="#8884d8" />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
}
