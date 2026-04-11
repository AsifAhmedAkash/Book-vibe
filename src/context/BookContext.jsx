import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localdb';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState(() => getAllReadListFromLocalDB());
    const [wishListBooks, setWishListBooks] = useState(() => getAllWishListFromLocalDB());

    // useEffect(() => {
    //     console.log(getAllReadListFromLocalDB(), "readlist");
    //     setStoredBooks(getAllReadListFromLocalDB());

    // }, [])

    const handleMarkAsRead = (currentBook) => {

        addReadListToLocalDB(currentBook);

        const isExistsBook = storedBooks.find(book => book.bookId == currentBook.bookId);
        // console.log(isExistsBook, "book if exisits");
        if (isExistsBook) {
            toast.error('the book is already exists');
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            // console.log(currentBook, "current book");
            toast.success(`${currentBook.bookName} is added to list`)
        }
    }

    const handleWishLishtBook = (currentBook) => {

        addWishListToLocalDB(currentBook);

        const isExistInReadList = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistInReadList) {
            toast.error("already in readlist");
            return;
        }

        const isWishListedBook = wishListBooks.find(book => book.bookId == currentBook.bookId);

        if (isWishListedBook) {
            toast.error('already this book is wishlisted');
        } else {
            setWishListBooks([...wishListBooks, currentBook]);
            toast.success(`${currentBook.bookName}book is wishlisted`);

        }
    }

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead, wishListBooks, setWishListBooks, handleWishLishtBook,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
}

export default BookProvider;