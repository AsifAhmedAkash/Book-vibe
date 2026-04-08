import React, { use } from 'react';

import BookCard from '../../components/ui/BookCard';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const Allbooks = () => {
    const books = use(booksPromise);
    console.log("books", books);

    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center mb-10'>books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    books.map((book, key) => {
                        return <BookCard key={key} book={book}></BookCard>
                    })
                }
            </div>
        </div>
    );
};

export default Allbooks;