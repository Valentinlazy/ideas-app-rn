import firebase from '../Firebase';

const LOAD = 'mainPageFeed/LOAD';
const ERROR = 'mainPageFeed/ERROR';
const SUCCESS = 'mainPageFeed/SUCCESS';

export const feedError = error => {
    return ({
        type: ERROR,
        payload: {error},
    });
};

export const feedLoad = () => {
    return ({
        type: LOAD,
    });
};

export const feedSuccess = feedNotes => {
    return ({
        type: SUCCESS,
        payload: {feedNotes},
    });
};

const INITIAL_STATE = {
    feedNotes: null,
    error: null,
};

export default function reducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case ERROR:
            return {
                ...state,
                error: payload.error,
            };

        case LOAD:
            return {
                ...state,
            };

        case SUCCESS:
            return {
                feedNotes: payload.feedNotes,
                error: null,
            };

        default:
            return state;
    }
}

export const watchMainPagePosts = () => {
    return function(dispatch) {
        firebase.database().ref('mainFeedPosts/').on('value', function(snapshot) {
            let mainPagePosts = snapshot.val();
            let actionMainPagePosts = feedSuccess(mainPagePosts);
            dispatch(actionMainPagePosts);
        }, function(error) {
            dispatch(feedError(error));
        });
    }
};