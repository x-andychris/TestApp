import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// importing components
import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';
import PreetyTextInput from '../../components/PreetyTextInput';
import AppButton from '../../components/AppButton';
import { CustomPicker } from '../../components/picker/';

import { Formik } from 'formik';
import CategoryPickerItem from '../../components/picker/CategoryPickerItem';


const categories2 = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
    { label: "Wood", value: 4 },
    { label: "Houses", value: 5 },
]

const categories = [
    { label: "Furniture", value: 1, color: "red", icon: 'apps' },
    { label: "Clothing", value: 2, color: "green", icon: 'email' },
    { label: "Camera", value: 3, color: "blue", icon: 'camera' },
    { label: "Wood", value: 4, color: "yellow", icon: 'email' },
    { label: "Houses", value: 5, color: "black", icon: 'warehouse' },
]

function PostListing(props) {
    // a hook to hold the value in the Category drop down at each point
    const [category, setCategory] = useState();

    return (
        <TweakedSafeAreaView>
            {/* Post Listing Interface */}
            <View style={styles.loginBox}>
                <View style={styles.logoContainer} >
                    <Text style={styles.label}>Add a Listing</Text>
                </View>
                <View style={styles.inputsContainer}>
                    {/* Using Formik to handle the form */}
                    <Formik
                        initialValues={{ title: '', price: '', description: '' }}
                        onSubmit={values => console.log(values, category)}
                    >
                        {({ handleChange, handleSubmit }) => (
                            <>
                                {/* For Title */}
                                <PreetyTextInput
                                    icon="lead-pencil"
                                    iconsize={25}
                                    iconcolor="black"
                                    onChangeText={handleChange("title")}
                                    // specifying the keyboard type
                                    keyboardType="default"
                                    placeholder="Title" />

                                {/* For Price */}
                                <PreetyTextInput
                                    icon="cash"
                                    iconsize={25}
                                    iconcolor="black"
                                    onChangeText={handleChange("price")}
                                    // specifying the keyboard type
                                    keyboardType="numeric"
                                    placeholder="Price" />

                                {/* For Category */}
                                <CustomPicker items={categories} icon="apps" iconsize={25} placeholder="Category"
                                    selectedItem={category}
                                    onSelectItem={(category) => setCategory(category)}
                                    // to display with icons
                                    PickerItemComponent={CategoryPickerItem}
                                // to display without icons
                                //PickerItemComponent={PickerItem}

                                />

                                {/* For Description */}
                                <PreetyTextInput
                                    icon="note-text"
                                    iconsize={25}
                                    iconcolor="black"
                                    onChangeText={handleChange("description")}
                                    keyboardType="default"
                                    placeholder="Description"
                                    multiline
                                    numberOfLines={3} />

                                {/* Post Button */}
                                <AppButton title="Post" baColor="#fc5c65" onPress={handleSubmit} />
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </TweakedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginBox: { marginTop: "15%" },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 40
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fc5c65"
    },
    inputsContainer: {
        padding: 10
    }
})

export default PostListing;