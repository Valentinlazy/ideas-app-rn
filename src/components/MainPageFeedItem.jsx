import React from 'react';
import {FlatList, Text} from "react-native";
import {Card} from "react-native-elements";
import PropTypes from 'prop-types';

export default class MainPageFeedItem extends React.Component {

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item}) => (
        <Card
            title={item.title}
            image={item.image ? {uri: item.image} : null}
        >
            <Text style={{marginBottom: 10}}>
                {item.text}
            </Text>
        </Card>
    );

    render() {
        const {data} = this.props;
        return (
            <FlatList
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

MainPageFeedItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
