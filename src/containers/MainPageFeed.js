import React from 'react';
import {connect} from 'react-redux';
import {watchMainPagePosts} from "../modules/mainPageFeed";
import {FlatList, Text} from "react-native";
import {Card} from "react-native-elements";

class MainFeedPage extends React.Component {
    componentDidMount() {
        this.props.watchMainPagePosts();
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => <Card
        title={item.title}
        image={{uri: item.image}}>
        <Text style={{marginBottom: 10}}>
            {item.text}
        </Text>
    </Card>;

    render() {
        console.log(this.props);
        console.log(this.props.feedNotes);
        if (this.props.feedNotes) {
            return (
                <FlatList
                    data={this.props.feedNotes}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
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