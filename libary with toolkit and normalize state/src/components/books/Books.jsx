import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Accordion, List, ListItem, SmallWaitCursor } from 'chayns-components';
import { selectBookEntities, selectBookIds } from '../../redux-modules/books/bookSelectors';
import { selectAuthorEntities } from '../../redux-modules/authors/authorsSelectors';
import Book from './book/Book';

const Books = ({}) => {
    const bookIds = useSelector(selectBookIds);

    if (bookIds.length === 0) {
        return <SmallWaitCursor />;
    }

    return (
        <Accordion
            head="Bücher"
            dataGroup="general"
        >
            <List>
                {
                    bookIds.map(bookId =>
                        <Book
                            bookId={bookId}
                        />
                    )
                }
            </List>
        </Accordion>
    );
};

Books.propTypes = {

};
Books.defaultProps = {

};

export default React.memo(Books);
