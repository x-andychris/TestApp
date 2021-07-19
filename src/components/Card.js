import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText'

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            {/* For the image */}
            <Image style={styles.image} source={image} />

            {/* For the text under the image */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>

                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        color: "black",
    },
    subTitle: {
        fontSize: 18,
        color: "tomato",
    }
})

export default Card;