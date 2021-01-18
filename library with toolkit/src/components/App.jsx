import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallWaitCursor } from 'chayns-components';
import Books from './books/Books';
import AddBook from './add-book/AddBook';
import Authors from './authors/Authors';
import { fetchBookAuthorCollection } from '../redux-modules/author/authorActions';
import { selectAuthorIsLoading } from '../redux-modules/author/authorSelectors';

const App = () => {
    const dispatch = useDispatch();

    const isAuthorLoading = useSelector(selectAuthorIsLoading);

    useEffect(() => {
        dispatch(fetchBookAuthorCollection());
    }, []);

    return (
        <div className="tapp">
            <AddBook />
            {
                isAuthorLoading ?
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
