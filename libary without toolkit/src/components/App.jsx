import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SmallWaitCursor } from 'chayns-components';
import Books from './books/Books';
import AddBook from './add-book/AddBook';
import Authors from './authors/Authors';
import { fetchBookAuthorCollection } from '../redux-modules/action/authorActions';
import { selectAuthorStore } from '../redux-modules/selector/authorSelector';

const App = () => {
    const dispatch = useDispatch();

    const authorStore = useSelector(selectAuthorStore);

    useEffect(() => {
        dispatch(fetchBookAuthorCollection());
    }, []);

    return (
        <div className="tapp">
            <AddBook />
            {
                authorStore.isLoading ?
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
