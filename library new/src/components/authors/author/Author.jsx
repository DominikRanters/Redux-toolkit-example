import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, ContextMenu } from 'chayns-components';
import { useDispatch, useSelector } from 'react-redux';
import { createAuthorSelector } from '../../../redux-modules/authors/authorsSelectors';
import { fetchUpdateAuthor } from '../../../redux-modules/authors/authorsActions';

const Author = ({ authorId }) => {
    const dispatch = useDispatch();

    const author = useSelector(createAuthorSelector(authorId));

    const openInputDialog = async () => {
        const result = await chayns.dialog.input({
            placeholderText: "Künstlername",
            type: chayns.dialog.inputType.INPUT,
            text: author.fullName,
            buttons:[{
                text: 'OK',
                buttonType: 1
            }],
        });

        if (result.buttonType === 1) {
            const body = {
                fullName: result.text
            };

            dispatch(fetchUpdateAuthor(body));
        }
    };

    return (
        <Accordion
            head={author.fullName}
            isWrapped
            fixed
            noIcon
            right={
                <ContextMenu
                    items={[{
                        text: "Bearbeiten",
                        icon: "fa fa-edit",
                        onClick: () => openInputDialog()
                    }]}
                />
            }
        />
    );
};

Author.propTypes = {
    authorId: PropTypes.number.isRequired,
};
Author.defaultProps = {

};

export default React.memo(Author);
