import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, List } from 'chayns-components';
import Book from '../books/book/Book';
import { useSelector } from 'react-redux';
import { selectAuthorsEntities, selectAuthorsIds } from '../../redux-modules/authors/authorsSelectors';
import Author from './author/Author';

const Authors = ({}) => {
    const authorIds = useSelector(selectAuthorsIds);
    const authors = useSelector(selectAuthorsEntities);

    return (
        <Accordion
            head="Autoren"
            dataGroup="general"
        >
            {
                authorIds.map(authorId => (
                  <Author
                    authorId={authorId}
                  />
                ))
            }
        </Accordion>
    );
};

Authors.propTypes = {

};
Authors.defaultProps = {

};

export default React.memo(Authors);
