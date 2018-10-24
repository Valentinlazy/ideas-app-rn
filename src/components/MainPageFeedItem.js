import React from 'react';
import {FlatList, Text} from "react-native";
import {Card} from "react-native-elements";

export default class MainPageFeedItem extends React.Component {

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item}) => <Card
        title={item.title}
        image={item.image ? {uri: item.image} : null}>
        <Text style={{marginBottom: 10}}>
            {item.text}
        </Text>
    </Card>;

    render() {
            return (
                <FlatList
                    data={this.props.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            )
    }
}
