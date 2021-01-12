import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallWaitCursor } from 'chayns-components';
import Books from './books/Books';
import AddBook from './add-book/AddBook';
import { fetchBookAuthorCollection } from '../redux-modules/books/booksActions';
import { selectBookIds, selectBookStore } from '../redux-modules/books/bookSelectors';
import Authors from './authors/Authors';

const App = () => {
    const dispatch = useDispatch();

    const bookIds = useSelector(selectBookIds);
    const bookStore = useSelector(selectBookStore);

    useEffect(() => {
        dispatch(fetchBookAuthorCollection());
    }, []);

    return (
        <div className="tapp">
            <AddBook />
            {
                bookStore.isLoading ?
                    <div style={{ marginTop: '40px', textAlign: 'center' }}>
                        <SmallWaitCursor show />
                    </div>
                :
                    <div>
                        <Books />
                        <Authors />
                    </div>
            }
        </div>
    );
};

export default App;
