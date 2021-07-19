import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { Formik } from 'formik';

// importing components
import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';
import PreetyTextInput from '../../components/PreetyTextInput';

import customStyles from '../../config/customStyles';
import AppButton from '../../components/AppButton';



function Register(props) {
    // hooks to hold the value in the Name, Email and Password input box at each point
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TweakedSafeAreaView>
            {/* Login Interface */}
            <View style={styles.loginBox}>
                <View style={styles.logoContainer} >
                    <Image style={styles.logo} source={require("../../assets/images/logo1.png")} />
                </View>
                <View style={styles.inputsContainer}>
                    {/* Using Formik to handle the form */}
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleSubmit }) => (
                            <>
                                {/* For name */}
                                <PreetyTextInput
                                    icon="account-cowboy-hat"
                                    iconsize={25}
                                    iconcolor="black"
                                    onChangeText={handleChange("name")}
                                    // specifying the keyboard type
                                    keyboardType="email-address"
                                    placeholder="Name" />

                                {/* For email */}
                                <PreetyTextInput
                                    icon="email"
                                    iconsize={25}
                                    iconcolor="black"
                                    onChangeText={handleChange("email")}
                                    // specifying the keyboard type
                                    keyboardType="email-address"
                                    placeholder="Email" />

                                {/* For Password */}
                                <PreetyTextInput
                                    icon="lock"
                                    iconsize={25}
                                    iconcolor="black"
                                    onChangeText={handleChange("password")}
                                    keyboardType="default"
                                    maxLength={15}
                                    secureTextEntry={true}
                                    placeholder="Password" />

                                {/* Login Button */}
                                <AppButton title="Register" baColor="#fc5c65" onPress={handleSubmit} />
                            </>
                        )}
                    </Formik>
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
    logo: {
        width: 100,
        height: 70,
    },
    inputsContainer: {
        padding: 10
    }
})

export default Register;