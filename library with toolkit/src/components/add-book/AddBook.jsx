import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Accordion, Button, Input } from 'chayns-components';
import './addBook.scss';
import { fetchAddAuthor } from '../../redux-modules/author/authorActions';

const AddBook = () => {
    const dispatch = useDispatch();

    const [bookName, setBookName] = useState('');
    const [authorFullName, setAuthorFullName] = useState('');

    const handleSaveBook = async () => {
        const body = {
            fullName: authorFullName,
            books: [{
                title: bookName,
            }],
        };

        const result = await dispatch(fetchAddAuthor(body));

        console.log(result);

        if (result.type.endsWith('/fulfilled')) {
            setBookName('');
            setAuthorFullName('');
        }
    };

    return (
        <Accordion
            head="Hinzufügen"
            dataGroup="general"
            icon="fa fa-plus"
        >
            <div className="accordion__content">
                <Input
                    className="form__input"
                    placeholder="Buch Titel"
                    value={bookName}
                    onChange={setBookName}
                    design={Input.BORDER_DESIGN}
                    dynamic={Input.BOTTOM_DYNAMIC}
                />
                <Input
                    className="form__input"
                    placeholder="Autor"
                    value={authorFullName}
                    onChange={setAuthorFullName}
                    design={Input.BORDER_DESIGN}
                    dynamic={Input.BOTTOM_DYNAMIC}
                />
                <div className="center__child">
                    <Button
                        onClick={handleSaveBook}
                    >
                        Speichern
                    </Button>
                </div>
            </div>

        </Accordion>
    );
};

AddBook.propTypes = {

};
AddBook.defaultProps = {

};

export default React.memo(AddBook);
