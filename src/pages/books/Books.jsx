import React from 'react';

const Books = () => {
    const { handleMarkAsRead, storedBooks } = useContext(BookContext);

    console.log(storedBooks, "stored");
    return (
        <div>
            Books page
        </div>
    );
};

export default Books;