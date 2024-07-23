import { SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";



export default function Onboarding() {
    
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Weather Forecast App</Text>
                <Text style={styles.by}>by</Text>
                <Text style={styles.name}>Awelewa Emmanuel Kanyinsola</Text>
                <Text style={styles.name}>csc/2019/1113</Text>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.push("Home")}>
                <Text style={styles.btnText}>Proceed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}