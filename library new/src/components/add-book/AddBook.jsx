import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Accordion } from 'chayns-components';

const AddBook = ({}) => {

    return (
        <Accordion
            head="Hinzufügen"
            dataGroup="general"
            icon="fa fa-plus"
        >
        </Accordion>
    );
};

AddBook.propTypes = {

};
AddBook.defaultProps = {

};

export default React.memo(AddBook);
