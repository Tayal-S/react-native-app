import React from "react";
import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator ,StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

export function Weather() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.6476&lon=-63.5728&APPID=38a8397efeaa58d4f2a7bcca05752abe&units=metric')
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  
    return (
       
      <View style={styles.container}>
         {/* //<FlatList> */}
         <Text style={styles.text}>{data.name}</Text>
         <Text style={styles.text}>{data.main.temp}</Text>
         <Text style={styles.text}>{data.weather[0].main}</Text>
         {/* </FlatList> */}
         
      </View>

    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
      borderRadius: 10,
    },
    text: {
      marginVertical: 10,
    },
  });