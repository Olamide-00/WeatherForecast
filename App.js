import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screen/onboarding';
import Home from './src/screen/home';
import Navigation from './src/navigation/appNavigation';

export default function App() {
  return (
    <View style={styles.container}>
    <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
