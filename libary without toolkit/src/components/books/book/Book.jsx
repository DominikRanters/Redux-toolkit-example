import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'chayns-components';

const Book = ({ book }) => {

    return (
        <ListItem
            title={book.title}
            subtitle={`von ${book.authorFullName}`}
        />
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authorFullName: PropTypes.string.isRequired,
    }).isRequired
};
Book.defaultProps = {

};

export default React.memo(Book);
