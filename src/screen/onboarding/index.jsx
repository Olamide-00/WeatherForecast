import { SafeAreaView, View, Text} from "react-native";
import { styles } from "./style";



export default function Onboarding() {
    return(
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Weather Forecast App</Text>
                <Text style={styles.by}>by</Text>
                <Text style={styles.name}></Text>
            </View>
        </SafeAreaView>
    )
}