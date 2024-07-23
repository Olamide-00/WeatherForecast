import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import Onboarding from "../screen/onboarding";
import Home from "../screen/home";


export default function Navigation() {

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
                initialRouteName="Onboarding"
            >
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}