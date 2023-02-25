import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Home from "./screens/Home";
import Navigator from './routes/homeStack';

export default function App() {
  return (
   // <Home />
    <Navigator />
    // <View style={styles.container}>
    //   <Text style = {styles.boldText}>Welcome to my React Native App</Text>
    //   <StatusBar style="auto" />
    //   <View style = {styles.buttonContainer}>
    //     <Button title = 'Navigation Screen'/>
    //   </View>
    // </View>

);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   boldText:{
//     fontWeight:"bold",
//   },
  
//   buttonContainer: {
//       marginTop: 20
//     }
  
// });
