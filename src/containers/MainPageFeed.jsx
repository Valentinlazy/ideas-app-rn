import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {watchMainPagePosts} from "../modules/mainPageFeed";
import MainPageFeedItem from '../components/MainPageFeedItem';

class MainFeedPage extends React.Component {
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

MainFeedPage.propTypes = {
    feedNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFeedPage);