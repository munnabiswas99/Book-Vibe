import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);

    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, author, category, review, totalPages, publisher, yearOfPublishing, rating} = singleBook;
    return (
        <div className='m-10 p-5 '>
            <div className='flex gap-10'>
                <img className='h-[400px] rounded-sm p-10 bg-gray-100' src={image} alt="" />
                <div>
                    <h3 className='font-semibold text-2xl'>{bookName}</h3>
                    <p>By: {author}</p>
                    <div className='border my-1'></div>
                    <p>{category}</p>

                    <p><span className='font-bold'>Review:</span>{review}</p>
                    <p><span className='font-bold'>Tag </span></p>
                    <div className='border my-1'></div>

                    <p>Number of Pages: <span className='font-bold'>{totalPages}</span></p>
                    <p>Publisher: <span className='font-bold'>{publisher}</span></p>
                    <p>Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span></p>
                    <p>Rating: <span className='font-bold'>{rating}</span></p>

                    <button className="btn btn-accent m-2">Read</button>
                    <button className="btn btn-info m2">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;