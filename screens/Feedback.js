import React from "react";
import { StyleSheet,View,Text,Button } from "react-native";


export function Feedback(){

    return(
    <View style = {styles.container}>
        <Text style = {styles.text}>It was a wonderful assignment!</Text>
        <Text style = {styles.text}>Thank you Simon!</Text>
    </View>


    )
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