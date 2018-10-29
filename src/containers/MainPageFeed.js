// @flow

import React from 'react';
import {connect} from 'react-redux';
import {watchMainPagePosts} from '../modules/mainPageFeed';
import type {State, Dispatch} from '../modules/mainPageFeed';
import MainPageFeedItem from '../components/MainPageFeedItem';

type Props = {
    feedNotes: Array<Object>,
    watchMainPagePosts: Function
};

class MainFeedPage extends React.Component<Props> {
    componentDidMount() {
        this.props.watchMainPagePosts();
    }

    render() {
        const {feedNotes} = this.props;
        if (feedNotes) {
            return (
                <MainPageFeedItem data={feedNotes} />
            )
        }
        return null;
    }
}

const mapStateToProps = (state: State) => {
    return {
        feedNotes: state.feedNotes
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        watchMainPagePosts: () => dispatch(watchMainPagePosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFeedPage);