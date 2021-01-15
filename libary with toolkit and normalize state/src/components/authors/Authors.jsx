import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, List } from 'chayns-components';
import { useSelector } from 'react-redux';
import { selectAuthorIds } from '../../redux-modules/author/authorSelectors';
import Author from './author/Author';

const Authors = () => {
    const authorIds = useSelector(selectAuthorIds);

    return (
        <Accordion
            head="Autoren"
            dataGroup="general"
        >
            {
                authorIds.map(authorId => (
                    <Author
                        key={authorId}
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
