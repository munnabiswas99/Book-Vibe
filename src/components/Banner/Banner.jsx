import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <p>Lorem ipsum dolor</p>
                <button className='btn btn-primary'>View The List</button>
            </div>

            <div>
                <img src={bookImage} alt="image" className='w-3/12'/>
            </div>
        </div>
    );
};

export default Banner;