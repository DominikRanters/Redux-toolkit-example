import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallWaitCursor } from 'chayns-components';
import Books from './books/Books';
import AddBook from './add-book/AddBook';
import { fetchBookAuthorCollection } from '../redux-modules/books/booksActions';
import { selectBooksIds } from '../redux-modules/books/bookSelectors';
import Authors from './authors/Authors';

const App = () => {
    const dispatch = useDispatch();
    const bookIds = useSelector(selectBooksIds);

    useEffect(() => {
        dispatch(fetchBookAuthorCollection());
    }, []);

    if (bookIds.length === 0) {
        return <SmallWaitCursor />;
    }

    return (
        <div className="tapp">
            <AddBook />
            <Books />
            <Authors />
        </div>
    );
};

export default App;
