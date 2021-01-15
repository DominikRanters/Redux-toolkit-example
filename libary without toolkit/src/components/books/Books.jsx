import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Accordion, List } from 'chayns-components';
import Book from './book/Book';
import { selectAuthorStore } from '../../redux-modules/selector/authorSelector';

const Books = ({}) => {
    const authorStore = useSelector(selectAuthorStore);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const books = useMemo(() => {
        let booksArray = [];

        authorStore.authors.forEach(author => {
            author.books.forEach(book => {
                booksArray.push({
                   ...book,
                    authorFullName: author.fullName,
                });
            })
        });

        return booksArray
    }, [authorStore])

    return (
        <Accordion
            head="Bücher"
            dataGroup="general"
        >
            <List>
                {
                    books.map(book =>
                        <Book
                            key={book.id}
                            book={book}
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
