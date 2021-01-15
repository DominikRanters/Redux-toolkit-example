import { HttpMethod, request } from 'chayns-helper';
import { sleep } from '../../utils/simulations';

export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const ADD_AUTHOR = 'ADD_AUTHOR';

export const loadAuthor = (data) => ({
    type: LOAD_AUTHORS,
    data
});

export const updateAuthor = (data) => ({
    type: UPDATE_AUTHOR,
    data
});


export const addAuthor = (data) => ({
    type: ADD_AUTHOR,
    data
});

export const fetchBookAuthorCollection = () => async (dispatch) => {
    // simulate backend waiting time
    await sleep(2000);

    const result = await request.fetch(`/../src/constants/data.json`, {
        method: HttpMethod.Get
    }, 'fetchBookAuthorCollection', {});

    if (result.status === 200) {
        dispatch(loadAuthor(result.data));

        return true;
    }

    return false;
};

export const fetchAddAuthorBook = (newAuthor) => async (dispatch, getState) => {
    const { author } = getState();

    // --------- Do fetch --------
    // const result = await request.fetch(
    //     `/../src/constants/data.json`,
    //     {
    //         method: HttpMethod.Get
    //     },
    //     'fetchBookAuthorCollection',
    //     {}
    // );

    // Set Ids (because I have no backend)
    const newBookId = author.authors.length + 5;
    const newAuthorId = author.authors.length + 1;

    // eslint-disable-next-line no-param-reassign
    newAuthor.id = newAuthorId;
    // eslint-disable-next-line no-param-reassign
    newAuthor.books[0].id = newBookId;

    dispatch(addAuthor(newAuthor));

    return newAuthor;
};
