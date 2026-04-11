import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({ sortingType }) => {
    const { storedBooks, wishListBooks } = useContext(BookContext);
    const [filterWishlist, setFilterWishlist] = useState(wishListBooks);

    useEffect(() => {
        const sortedData = [...(Array.isArray(wishListBooks) ? wishListBooks : [])];

        if (sortingType === "pages") {
            sortedData.sort((a, b) => a.pageNumbers - b.pageNumbers);
        } else if (sortingType === "rating") {
            sortedData.sort((a, b) => a.rating - b.rating);
        }

        setFilterWishlist(sortedData);
    }, [sortingType, wishListBooks])

    if (filterWishlist.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex justify-center items-center text-center'>
            <h2 className='font-bold text-3xl'> No wishlist found </h2>

        </div>
    }


    // console.log(storedBooks, wishListBooks, "stored and whislists from listread list")

    return (
        <div>
            <div className='grid grid-cols-1 md: grid-cols-3 gap-4'>
                {filterWishlist.map(book => <BookCard book={book}></BookCard>)}
            </div>

        </div>
    );
};

export default ListedWishList;