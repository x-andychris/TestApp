import React, { useState } from 'react';

import { Alert, FlatList, SafeAreaView, StyleSheet, View, } from 'react-native';

// importing Constants
import Constants from 'expo-constants';

// importing the list item template
import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../../components/lists"

import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';

// sample array with values
const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../../assets/images/orb.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../../assets/images/clean.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../../assets/images/chairimage.jpg')
    },
]

function MessagesScreen(props) {
    // a hook so that we can handle delete and changes to the array that would also affect the List
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    // the function to handle delete
    const handleDelete = message => {
        // Delete the message from the messages array
        const updatedMessages = messages.filter(m => m.id !== message.id);
        setMessages(updatedMessages);
    }

    // a method to show the delete confirmation popup
    const deleteConfirmation = item => {
        Alert.alert(
            "Delete Confirmation",
            "You are about deleting a message",
            [
                // the two buttons and the actions attributed to each
                { text: "OK", onPress: () => handleDelete(item) },
                { text: "Cancel" },
            ],
            {
                // set this option if you want to click outside to dismiss the popup
                cancelable: true,
            }
        );
    }

    // the view
    return (
        <TweakedSafeAreaView style={styles.screen}>
            <FlatList data={messages}
                keyExtractor={messages => messages.id.toString()}
                // rendering the items (using the display template)
                renderItem={({ item }) =>
                    <ListItem title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log()}
                        // action to occur/ page to show when an item is swipped right
                        renderRightActions={() =>
                            // displaying the delete when swiped and calling the delete confirmation
                            <ListItemDeleteAction onPress={() => deleteConfirmation(item)} />} />}
                // a seperator between the rendered items
                ItemSeparatorComponent={ListItemSeparator}
                // allowing refresh
                refreshing={refreshing}
                // reloading the initial messages during refresh
                onRefresh={() => setMessages(initialMessages)} />
        </TweakedSafeAreaView>
    );
}

// styling
const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },

})

export default MessagesScreen;