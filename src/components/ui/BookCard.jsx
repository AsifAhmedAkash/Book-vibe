import React from 'react';
// import use from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
            <figure className='p-6'>
                <img className='rounded-xl h-[250px]' alt={book.bookName}
                    src={book.image} />
            </figure>
            <div className="card-body">
                <div className='items-center gap-2 flex'>
                    {book.tags.map((tag, ind) => { return <div key={ind} className="badge text-green-500 bg-green-100 font-bold ">{tag}</div> })}
                </div>
                <h2 className="card-title font-bold text-2xl">
                    {book.bookName}
                </h2>
                <p className='text-xl font-semibold'>{book.author}</p>

                <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="font-semibold flex items-center ">{book.rating} <CiStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;