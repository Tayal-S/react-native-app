import React from "react";
import { StyleSheet,View,Text,Button } from "react-native";


export default function Home({navigation}){
    const pressHandler = () =>{
        navigation.navigate("Weather")
    };
    const pressHandler_1 = () =>{
        navigation.navigate("Feedback")
    };
    return(
        <View style={styles.container}>
      <Text style ={styles.text}>Welcome to my React App!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Weather Screen" onPress={pressHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Feedback Screen" onPress={pressHandler_1} />
      </View>
    </View>
  );


    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
      },
   
    
    buttonContainer: {
        marginTop: 20
      }
    
  });