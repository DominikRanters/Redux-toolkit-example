import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, ContextMenu } from 'chayns-components';
import { useDispatch } from 'react-redux';
import { updateAuthor } from '../../../redux-modules/action/authorActions';

const Author = ({ author }) => {
    const dispatch = useDispatch();

    const openInputDialog = async () => {
        const result = await chayns.dialog.input({
            placeholderText: "Autor",
            type: chayns.dialog.inputType.INPUT,
            text: author.fullName,
            buttons:[{
                text: 'OK',
                buttonType: 1
            }],
        });

        if (result.buttonType === 1) {
            const body = {
                id: author.id,
                fullName: result.text
            };

            dispatch(updateAuthor(body));
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
        >
            <div/>
        </Accordion>
    );
};

Author.propTypes = {
    author: PropTypes.shape({
        id: PropTypes.number.isRequired,
        fullName: PropTypes.string.isRequired,
    }).isRequired
};
Author.defaultProps = {

};

export default React.memo(Author);
