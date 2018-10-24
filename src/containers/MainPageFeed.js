import React from 'react';
import {connect} from 'react-redux';
import {watchMainPagePosts} from "../modules/mainPageFeed";
import MainPageFeedItem from '../components/MainPageFeedItem';

class MainFeedPage extends React.Component {
    componentDidMount() {
        this.props.watchMainPagePosts();
    }

    render() {
        if (this.props.feedNotes) {
            return (
                <MainPageFeedItem data={this.props.feedNotes}/>
            )
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        feedNotes: state.feedNotes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        watchMainPagePosts: () => dispatch(watchMainPagePosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFeedPage);