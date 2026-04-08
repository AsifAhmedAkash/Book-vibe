import React, { useContext, useState } from 'react';
import { use } from 'react';
import { useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const books = use(booksPromise);

    const expectedBook = books.find(book => book.bookId == id);


    const { handleMarkAsRead, storedBooks, wishListBooks, handleWishLishtBook, } = useContext(BookContext);

    // console.log(storedBooks, "stored");


    // console.log(bookContext, "book context");
    // console.log(expectedBook);
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, } = expectedBook;
    // console.log(books);'



    return (
        <div className="grid grid-cols-2 card lg:card-side bg-base-100 shadow-sm container mx-auto">
            <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl my-10'>
                <img
                    src={image} className='max-h-[500px] w-auto' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">{author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p>Review: {review}</p>
                {tags.map((tag, ind) => { return <div key={ind} className="badge text-green-500 bg-green-100 font-bold ">{tag}</div> })}

                <div className="border-t">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number of pages: </span>  <span> {totalPages} </span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher: </span>  <span> {publisher} </span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Year of Publishing: </span>  <span> {yearOfPublishing} </span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Rating: </span>  <span> {rating} </span>
                    </div>
                    <button className="btn btn-primary" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
                    <button className="btn btn-primary" onClick={() => handleWishLishtBook(expectedBook)}>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;