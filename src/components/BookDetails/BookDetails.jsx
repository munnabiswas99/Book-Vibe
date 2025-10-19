import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Helmet } from "react-helmet";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  // console.log(id);
  const data = useLoaderData();
  // console.log(data);

  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
  title: "Good job!",
  text: "Book Added to Read List",
  icon: "success"
});

    addToStoredDB(id);
  };

  return (
    <div className="m-10 p-5 ">
        <Helmet>
            <title>Book Details</title>
        </Helmet>
      <div className="flex gap-10">
        <img
          className="h-[400px] rounded-sm p-10 bg-gray-100"
          src={image}
          alt=""
        />
        <div>
          <h3 className="font-semibold text-2xl">{bookName}</h3>
          <p>By: {author}</p>
          <div className="border my-1"></div>
          <p>{category}</p>

          <p>
            <span className="font-bold">Review:</span>
            {review}
          </p>
          <p>
            <span className="font-bold">Tag </span>
          </p>
          <div className="border my-1"></div>

          <p>
            Number of Pages: <span className="font-bold">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>

          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-accent m-2"
          >
            Mark As Read
          </button>
          <button className="btn btn-info m2">Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
