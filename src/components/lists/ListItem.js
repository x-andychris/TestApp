import React from 'react';

import { Image, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

// adding swipe effects
import { Swipeable } from 'react-native-gesture-handler';

import AppText from '../AppText';
import colors from '../../config/colors';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View style={styles.userdetails}>
                        <Text style={styles.title} numberOfLines={1}>{title}</Text>
                        {/* Using numberOfLines to handle long text* adds a ... */}
                        <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>
                    </View>
                    <MaterialCommunityIcons color={colors.medium} style={styles.endingicon} name="chevron-right" size={25} />
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontSize: 18,
        color: "black",
        fontWeight: "900"
    },
    subTitle: {
        fontSize: 15,
        color: "#6e6969",
    },
    userdetails: {
        justifyContent: "center",
        flex: 1
    },
    endingicon: {
        alignSelf: "center",
        // paddingRight: 5
    }
})

export default ListItem;