import React, { useMemo } from 'react';
import { Accordion } from 'chayns-components';
import { useSelector } from 'react-redux';
import { selectAuthorList } from '../../redux-modules/author/authorSelectors';
import Author from './author/Author';

const Authors = () => {
    const authorList = useSelector(selectAuthorList);

    const authors = useMemo(() => (
        [...authorList].sort((a, b) => (
            a.fullName.localeCompare(b.fullName)
        ))
    ), [authorList])

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
