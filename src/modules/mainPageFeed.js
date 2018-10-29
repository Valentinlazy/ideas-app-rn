//@flow

import firebase from '../Firebase';
import type {ExtractReturn} from '../constants/types';

const LOAD = 'mainPageFeed/LOAD';
const ERROR = 'mainPageFeed/ERROR';
const SUCCESS = 'mainPageFeed/SUCCESS';

export type State = {
    feedNotes: Array<Object> | null,
    error: Object | null
};

export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export type Action = ExtractReturn<typeof feedSuccess> |
    ExtractReturn<typeof feedError>;

export function feedError(error: Object): Action {
    return ({
        type: ERROR,
        payload: {error},
    });
}

// export const feedLoad = () => {
//     return ({
//         type: LOAD,
//     });
// };

export function feedSuccess(feedNotes: Array<Object>): Action {
    return ({
        type: SUCCESS,
        payload: {feedNotes},
    });
}

const INITIAL_STATE = {
    feedNotes: null,
    error: null,
};

export default function reducer (state: State = INITIAL_STATE, action: Action) {
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
// export const watchMainPagePosts = () => {
export function watchMainPagePosts(): ThunkAction {
    return function(dispatch: Dispatch) {
        firebase.database().ref('mainFeedPosts/').on('value', function(snapshot: Object) {
            let mainPagePosts = snapshot.val();
            let actionMainPagePosts = feedSuccess(mainPagePosts);
            dispatch(actionMainPagePosts);
        }, function(error: Object) {
            dispatch(feedError(error));
        });
    }
}