import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = () => {
    const { storedBooks, wishListBooks } = useContext(BookContext);

    if (wishListBooks.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex justify-center items-center text-center'>
            <h2 className='font-bold text-3xl'> No wishlist found </h2>

        </div>
    }


    // console.log(storedBooks, wishListBooks, "stored and whislists from listread list")

    return (
        <div>
            <div className='grid grid-cols-1 md: grid-cols-3 gap-4'>
                {wishListBooks.map(book => <BookCard book={book}></BookCard>)}
            </div>

        </div>
    );
};

export default ListedWishList;