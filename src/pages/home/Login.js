import React from 'react';
import { Text, View, Image, StyleSheet, Tooltip } from 'react-native';

// import formik for better form management
import { Formik } from 'formik';

// import you for form validation
import * as Yup from 'yup';

// importing components
import TweakedSafeAreaView from '../../components/TweakedSafeAreaView';
import PreetyTextInput from '../../components/PreetyTextInput';

import customStyles from '../../config/customStyles';
import AppButton from '../../components/AppButton';

// the validation syntax using yup
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(10).label("Password")
})

function Login(props) {

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
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => console.log(values)}
                        // using up with the predefined validation syntax
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                {/* For email */}
                                <PreetyTextInput
                                    icon="email"
                                    iconsize={25}
                                    onChangeText={handleChange("email")}
                                    // specifying the keyboard type
                                    keyboardType="email-address"
                                    placeholder="Email"
                                    // setting the feild touched to true when the text is altered (so validation only happens when the text is changed)
                                    onChange={() => setFieldTouched("email")}
                                    // setting the icon color depending on if validation was successful and if there has been a change
                                    iconcolor={(errors.email && touched.email) ? "#fc5c65" : "black"}
                                // onSubmitEditing={() => { this.password.focus(); }}
                                />

                                {/* Displaying a validation error message */}
                                {/* {errors.email && <Text style={customStyles.errorMessage}>{errors.email}</Text>} */}

                                {/* For Password */}
                                <PreetyTextInput
                                    icon="lock"
                                    iconsize={25}
                                    onChangeText={handleChange("password")}
                                    keyboardType="default"
                                    maxLength={15}
                                    secureTextEntry={true}
                                    placeholder="Password"
                                    // setting the feild touched to true when the text is altered
                                    onChange={() => setFieldTouched("password")}
                                    iconcolor={(errors.password && touched.password) ? "#fc5c65" : "black"}
                                // ref={(input) => { this.password = input; }}
                                />

                                {/* Login Button */}
                                {/* Now it only submits when validation is passed */}
                                <AppButton title="Login" baColor="#fc5c65" onPress={handleSubmit} />
                            </>
                        )}
                    </Formik>

                </View>
            </View>
        </TweakedSafeAreaView>
    );
}

const styles = StyleSheet.create({
    loginBox: { marginTop: "30%" },
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

export default Login;