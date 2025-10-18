import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);

    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        // console.log(myReadList);
        setReadList(myReadList);
    },[])

    return (
        <div>
            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Books I have read: {readList.length}</h2>
                {
                    readList.map(b => <Book key={b.bookId} singleBook = {b}></Book>)
                }
                </TabPanel>
                <TabPanel>
                <h2>Books I wants to read</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;