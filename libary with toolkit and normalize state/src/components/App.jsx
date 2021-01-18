import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallWaitCursor } from 'chayns-components';
import Books from './books/Books';
import AddBook from './add-book/AddBook';
import { fetchBookAuthorCollection } from '../redux-modules/book/bookActions';
import { selectBookIsLoading } from '../redux-modules/book/bookSelectors';
import Authors from './authors/Authors';

const App = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectBookIsLoading);

    useEffect(() => {
        dispatch(fetchBookAuthorCollection());
    }, []);

    return (
        <div className="tapp">
            <AddBook />
            {
                isLoading ?
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
