import React from 'react';

import { View, StyleSheet } from 'react-native';

// importing the list item template
import { ListItem, MiniListItem, ListItemSeparator } from "../../components/lists"

import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';

import colors from '../../config/colors';

function AccountScreen(props) {
    return (
        <TweakedSafeAreaView style={styles.container}>

            <View style={styles.header}>
                <ListItem image={require("../../assets/images/orb.jpg")} title="Christopher Chukwuemeka" subTitle="xandychris@yahoo.com" />
            </View>

            <View style={styles.header}>
                <MiniListItem text="My Listings" icon="format-list-bulleted" iconcolor="#eb3456" />
                <ListItemSeparator />
                <MiniListItem text="My Account" icon="email" iconcolor="#34eb9f" />
            </View>

            <View style={styles.header}>
                <MiniListItem text="Log Out" icon="format-list-bulleted" iconcolor="#d5eb34" />
            </View>
        </TweakedSafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
    },
    header: {
        padding: 10,
        backgroundColor: "white",
        marginBottom: 30
    },
    screen: {
        padding: 10,
    },
})

export default AccountScreen;