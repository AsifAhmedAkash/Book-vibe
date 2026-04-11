import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {
    const { storedBooks, wishListBooks } = useContext(BookContext);


    console.log(storedBooks, "stored");
    return (
        <div className='container mx-auto my-3'>
            Books page:


            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>read list : {storedBooks.length}</h2>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <h2>wish list : {wishListBooks.length}</h2>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;