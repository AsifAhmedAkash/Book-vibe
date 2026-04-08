import React, { use } from 'react';
// import use from 'react';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const Allbooks = () => {
    const books = use(booksPromise);
    console.log("books", books);

    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center'>books</h2>

            {
                books.map(book => {
                    return <h2>{book.bookName}</h2>
                })
            }
        </div>
    );
};

export default Allbooks;