//index.js
import {View, Text, StyleSheet, Alert, ActivityIndicator, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import Constants  from 'expo-constants';
import Weatherinfo from './Weatherinfo';
import background from "../assets/sunset.jpeg";
import font from "../assets/RobotoCondensed-Regular.ttf"
const API_KEY = '263c13155a9b6a252c265238062ee451';

const Weather = () => {
    const [weatherData, setWeatherdata] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const fetchWeatherData = async (cityname) => {  
        try {
            setLoaded(false);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=imperial`);            
            if (response.status == 200){
                const data = await response.json();
                setWeatherdata(data);
            }
            else { 
                setWeatherdata(null);
            }
            setLoaded(true);
        } catch(error) {
            Alert.alert('error', error.message);
        }
    }

    useEffect(() => {
        fetchWeatherData('Cumming');
    }, []);
    if (!loaded) {
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }
    else if(weatherData === null){
        return(
            <View style={styles.container}>
                <Text>City Not Found</Text>
            </View>
        );
    }
    else{
     return (
        <ImageBackground source={background} style={styles.container}>
            <View style={styles.container}>
                <Weatherinfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
            </View>
        </ImageBackground>
    );       
    }
}



export default Weather;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      //fontFamily: font
    },

  });
  