import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Accordion, List } from 'chayns-components';
import Book from './book/Book';
import { selectAuthorList } from '../../redux-modules/selector/authorSelector';

const Books = () => {
    const authorList = useSelector(selectAuthorList);

    const books = useMemo(() => authorList.flatMap((author) => (
        author.books.map((book) => ({
            ...book,
            authorFullName: author.fullName
        }))
    )), [authorList])

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
