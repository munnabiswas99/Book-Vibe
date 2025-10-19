import React, { Suspense, useEffect, usenpmState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
//   const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //     fetch("booksData.json")
  //     .then(res => res.json())
  //     .then(data => {
  //         setAllBooks(data)
  //     })
  // },[])

  // const bookPromise = fetch('./booksData.json').then(res=>res.json());

  return (
    <div>
      <h5 className="text-3xl text-center p-10">Books</h5>
      <Suspense fallback={<span>loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
