import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'chayns-components';
import { shallowEqual, useSelector } from 'react-redux';
import { createBookSelector } from '../../../redux-modules/books/bookSelectors';
import { selectAuthorEntities } from '../../../redux-modules/authors/authorsSelectors';

const Book = ({ bookId }) => {
    const book = useSelector(createBookSelector(bookId), shallowEqual);
    const authors = useSelector(selectAuthorEntities);

    return (
        <ListItem
            key={bookId}
            title={book.title}
            subtitle={`von ${authors[book.authorId].fullName}`}
        />
    );
};

Book.propTypes = {
    bookId: PropTypes.number.isRequired,
};
Book.defaultProps = {

};

export default React.memo(Book);
