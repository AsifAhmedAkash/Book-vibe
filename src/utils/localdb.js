const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();

    const ifAlreadExists = allBooks.find(bk => bk.bookId === book.bookId)

    if (ifAlreadExists) {
        console.log("book already exists");
        return;
    } else {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }

};

const addWishListToLocalDB = (book) => {
    const allbooks = getAllReadListFromLocalDB();
    const ifBookAlreadyExistsInWishList = allbooks.find(bk => bk.bookId === book.bookId);

    if (ifBookAlreadyExistsInWishList) {
        console.log("already in wishlist");
    } else {
        allbooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allbooks));
    }
}

const getAllReadListFromLocalDB = () => {
    const allreadList = localStorage.getItem("readList");
    // console.log(allreadList, "allread list");

    if (allreadList) return JSON.parse(allreadList);

    return [];
}

const getAllWishListFromLocalDB = () => {
    const allwishList = localStorage.getItem("wishList");

    if (allwishList) return JSON.parse(allwishList);

    return [];
}

export { getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB }