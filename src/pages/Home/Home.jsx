import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import { Helmet} from 'react-helmet-async';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Helmet>
                <title>Book Vibe | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;