import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        // console.log(myReadList);
        setReadList(myReadList);
    },[])

    const handleSort = (type) => {
        setSort(type);
        if (type === "pages") {
            // Ascending order
            const sortedByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        } 
        if (type === "rating") {
            // Descending order
            const sortedByRating = [...readList].sort((a,b) => b.rating - a.rating);
            setReadList(sortedByRating);
        } 
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Short By: {sort?sort:""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort("pages")}>Number of Pages</a></li>
                        <li><a onClick={()=>handleSort("rating")}>Rating</a></li>
                    </ul>
                </details>
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