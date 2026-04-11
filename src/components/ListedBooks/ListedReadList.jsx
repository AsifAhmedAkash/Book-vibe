import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedReadList = ({ sortingType }) => {
    const { storedBooks } = useContext(BookContext);
    const [filterReadlist, setFilterReadlist] = useState(storedBooks);

    useEffect(() => {
        const sortedData = [...(Array.isArray(storedBooks) ? storedBooks : [])];

        if (sortingType === 'pages') {
            sortedData.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortingType === 'rating') {
            sortedData.sort((a, b) => a.rating - b.rating);
        }

        setFilterReadlist(sortedData);
    }, [sortingType, storedBooks]);


    if (filterReadlist.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex justify-center items-center text-center'>
            <h2 className='font-bold text-3xl'> No Read Books found </h2>
        </div>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md: grid-cols-3 gap-4'>
                {filterReadlist.map(book => <BookCard key={book.bookId} book={book} />)}
            </div>
        </div>
    );
};

export default ListedReadList;