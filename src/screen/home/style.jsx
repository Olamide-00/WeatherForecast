import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    background: {
        flex: 1
    },
    container: {
        paddingTop: hp(5),
        marginHorizontal: wp(3),
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: wp(5),
        marginBottom: hp(3)
    },
    title: {
        fontSize: hp(4),
        color: "#fff",
        fontWeight: "bold",
        marginBottom: hp(5),
        alignSelf: "center"
    },
    searchContainer: {
        backgroundColor: "dodgerblue",
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        borderRadius: 8,
        flexDirection: "row"
    },
    locationContainer: {
        backgroundColor: "dodgerblue",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
        borderRadius: 8
    },
    locationName: {
        color: "#fff"
    },
    tempContainer: {
        marginTop: hp(2),
        alignSelf: "center"
    },
    temp: {
        fontSize: hp(10),
        fontWeight: "900",
        color: "#fff"
    },
    tempImage: {
        height: 120,
        width: 120,
        marginTop: hp(-7)
    },
    unit: {
        transform: [{ rotate: "90deg"}],
        marginLeft: wp(26),
        marginTop: hp(-1)
    },
    contentContainer: {
        borderWidth: 1,
        marginHorizontal: wp(3),
        borderColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: wp(3),
        paddingTop: hp(3),
        marginTop: hp(10),
        marginBottom: hp(3)
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: hp(1)
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        width: wp(45)
    },
    label: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 5,
        fontWeight: "500",
        fontSize: hp(2.5),
        marginBottom: hp(2)
    },
    value: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 5
    },
    forecastContainer: {
        flexDirection: "row", // Add this line to make the forecast items in a row
        justifyContent: "space-around",
        marginTop: hp(5),
        paddingHorizontal: wp(3)
    },
    forecastItem: {
        alignItems: "center",
        marginBottom: hp(2)
    },
    date: {
        color: "#fff",
        fontSize: 16
    },
    forecastImage: {
        height: 50,
        width: 50
    },
    condition: {
        color: "#fff",
        fontSize: 16
    },
    temp: {
        color: "#fff",
        fontSize: 16
    },
    mainTemp: {
        fontSize: hp(10),
        fontWeight: "900",
        color: "#fff"
    },
    input: {
        width: wp(20),
        marginLeft: wp(2),
        color: "#fff"
    },
    blur: {
        flex: 1,
        
    },
    searchButton2: {
        backgroundColor: "#fff",
        paddingHorizontal: wp(2),
        borderRadius: 8
    },
    searchButtonText: {
        color: "dodgerblue",
        fontWeight: "700",
        alignSelf: "center"
    }
});
