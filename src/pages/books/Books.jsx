import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
    const { storedBooks, wishList } = useContext(BookContext);


    console.log(storedBooks, "stored");
    return (
        <div>
            Books page:
            <br />
            readlist:
            {
                storedBooks.length
            }
        </div>
    );
};

export default Books;