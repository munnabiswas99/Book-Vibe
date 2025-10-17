import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);

    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook;
    return (
        <div>
            <h4>Book Details</h4>
            <div>
                <img src={image} alt="" />
                <h3>{bookName}</h3>
            </div>
        </div>
    );
};

export default BookDetails;