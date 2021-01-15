import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { useSelector } from 'react-redux';
import Author from './author/Author';
import { selectAuthorStore } from '../../redux-modules/selector/authorSelector';

const Authors = () => {
    const authorStore = useSelector(selectAuthorStore);

    const authors = useMemo(() => (
        [...authorStore.authors].sort((a, b) => (
            a.fullName.localeCompare(b.fullName)
        ))
    ), [authorStore])

    return (
        <Accordion
            head="Autoren"
            dataGroup="general"
        >
            {
                authors.map(author => (
                    <Author
                        key={author.id}
                        author={author}
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
