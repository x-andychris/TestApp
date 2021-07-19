import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// importing components
import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';
import PreetyTextInput from '../../components/PreetyTextInput';
import AppButton from '../../components/AppButton';
import CustomPicker from '../../components/CustomPicker';

import customStyles from '../../config/customStyles';


const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
    { label: "Wood", value: 4 },
    { label: "Houses", value: 5 },
]

function PostListing(props) {
    // a hook to hold the value in the Email and Password input box at each point
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCatagory] = useState();
    const [password, setPassword] = useState('');

    return (
        <TweakedSafeAreaView>
            {/* Post Listing Interface */}
            <View style={styles.loginBox}>
                <View style={styles.logoContainer} >
                    <Text style={styles.label}>Add a Listing</Text>
                </View>
                <View style={styles.inputsContainer}>
                    {/* For Title */}
                    <PreetyTextInput
                        icon="lead-pencil"
                        iconsize={25}
                        iconcolor="black"
                        onChangeText={(text) => setName(text)}
                        // specifying the keyboard type
                        keyboardType="default"
                        placeholder="Title" />

                    {/* For Price */}
                    <PreetyTextInput
                        icon="cash"
                        iconsize={25}
                        iconcolor="black"
                        onChangeText={(text) => setEmail(text)}
                        // specifying the keyboard type
                        keyboardType="numeric"
                        placeholder="Price" />

                    {/* For Category */}
                    <CustomPicker items={categories} icon="apps" iconsize={25} placeholder="Category"
                        selectedItem={category}
                        onSelectItem={(category) => setCatagory(category)} />

                    {/* For Description */}
                    <PreetyTextInput
                        icon="note-text"
                        iconsize={25}
                        iconcolor="black"
                        onChangeText={(text) => setPassword(text)}
                        keyboardType="default"
                        maxLength={15}
                        secureTextEntry={true}
                        placeholder="Description" />

                    {/* Post Button */}
                    <AppButton title="Post" baColor="#fc5c65" />
                </View>
            </View>
        </TweakedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginBox: { marginTop: "20%" },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40
    },
    label: {
        fontSize: 20,
        fontWeight: "bold"
    },
    inputsContainer: {
        padding: 10
    }
})

export default PostListing;