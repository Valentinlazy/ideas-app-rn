//@flow

import React from 'react';
import {FlatList, Text} from "react-native";
import {Card} from "react-native-elements";

type Props = {
    data: Array<Object>
};

export default class MainPageFeedItem extends React.Component<Props> {

    _keyExtractor = (item: Object, index: number) => index.toString();

    _renderItem = ({item}: Object) => (
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

