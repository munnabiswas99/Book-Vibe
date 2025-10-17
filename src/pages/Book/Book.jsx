// import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);
  console.log(singleBook);

  const { bookName, bookId, author, image, rating, category, tags, yearOfPublishing } =
    singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="p-3 bg-gray-300 w-2/3 mx-auto rounded-sm">
          <img className="h-[166px] rounded-sm" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-12 ml-2 font-semibold text-green-600">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-1 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
