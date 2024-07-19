import { StyleSheet  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";



export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "dodgerblue"
    },
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: hp(4),
        fontWeight: "bold",
        color: "#fff"
    },
    by: {
        marginVertical: hp(2),
        color: "#fff",
        fontWeight: "500"
    },
    name: {
        fontSize: hp(3.5),
        marginVertical: hp(2),
        color: "#fff",
        fontWeight: "bold"
    },
    btnContainer: {
        backgroundColor: "#fff",
        marginHorizontal: wp(5),
        alignItems: "center",
        justifyContent: "center",
        height: hp(6),
        marginBottom: hp(5),
        borderRadius: 10
    },
    btnText: {
        color: "dodgerblue"
    }
})