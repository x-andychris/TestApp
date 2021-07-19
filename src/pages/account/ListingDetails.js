import React from 'react';

import { View, StyleSheet, Image } from 'react-native';

import AppText from '../../components/AppText';

// importing the list item template
import { ListItem, } from "../../components/lists"

function ListingDetails(props) {
    return (
        <View>
            {/* For the product image at the top */}
            <Image style={styles.image} source={require("../../assets/images/clean.jpg")} />
            {/* FOr the details within the page */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Water Lane For Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userDetail}></View>
                {/* The poster information */}
                <View style={{ marginVertical: 10 }}>
                    <ListItem image={require("../../assets/images/orb.jpg")} title="Christopher Chukwuemeka" subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 15,
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "black"
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5
    },

});
export default ListingDetails;