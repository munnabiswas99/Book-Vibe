import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, in!</p>
          <button className="btn bg-emerald-600 mt-4 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
