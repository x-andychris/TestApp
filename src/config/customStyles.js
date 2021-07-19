import { Platform } from "react-native";

import colors from "./colors";

export default {
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    pickerText: {
        color: colors.dark,
        fontSize: 17,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    errorMessage: {
        color: "red"
    }
}

