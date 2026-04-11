import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {
    // const { storedBooks, wishListBooks } = useContext(BookContext);
    const [sortingType, setSortedType] = useState("pages");


    console.log("sorting type ", sortingType);
    // console.log(storedBooks, "stored");
    return (
        <div className='container mx-auto my-3'>

            <div className='flex justify-center my-3'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️ {sortingType}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortedType("pages")}><a>Pages</a></li>
                        <li onClick={() => setSortedType("rating")}><a>Rating</a></li>
                    </ul>
                </div>
            </div>



            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel >
                    {/* <h2>read list : {storedBooks.length}</h2> */}
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel >
                    {/* <h2>wish list : {wishListBooks.length}</h2> */}
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;