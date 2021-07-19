import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Card from '../../components/Card';
import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';
import colors from '../../config/colors';

const initialListings = [
    {
        id: 1,
        title: 'Water Lane For Sale',
        price: 100,
        image: require('../../assets/images/clean.jpg')
    }, {
        id: 2,
        title: 'Crystal Orb For Sale',
        price: 650,
        image: require('../../assets/images/orb.jpg')
    }, {
        id: 3,
        title: 'Used Dogs For Sale',
        price: 200,
        image: require('../../assets/images/dogs.jpg')
    },
]

function ListingsScreen(props) {
    // a hook so that we can handle delete and changes to the array that would also affect the List
    const [listings, setListings] = useState(initialListings);
    const [refreshing, setRefreshing] = useState(false);

    return (
        <TweakedSafeAreaView style={styles.container}>
            <FlatList data={listings}
                keyExtractor={listings => listings.id.toString()}
                // rendering the items (using the display template)
                renderItem={({ item }) =>
                    <Card title={item.title} subTitle={"$" + item.price} image={item.image} />}

                // hiding the scroll bar
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}

                // refresh on pull
                // allowing refresh
                refreshing={refreshing}
                // reloading the initial messages during refresh
                onRefresh={() => setMessages(initialListings)}
            />
        </TweakedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.light
    },
})

export default ListingsScreen;