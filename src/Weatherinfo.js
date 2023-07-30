import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import WeatherSearch from './search'

const weatherInfo = ({ weatherData, fetchWeatherData }) => {
  const {
    name,
    weather: [{ description }],
    main: { temp, humidity, feels_like },
  } = weatherData;
  const Rtemp = Math.round(temp);
  const Rfeel = Math.round(feels_like);
  return (
    <SafeAreaView style={styles.container}>
      <WeatherSearch fetchWeatherData={fetchWeatherData} />
      <View style={styles.logo}>
        <Text style={styles.currentTemp}>{Rtemp}°F</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{name}</Text>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Text style={styles.infoText}>{Rfeel}­°F</Text>
          <Text style={styles.infoText}>Feels Like</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>{humidity}%</Text>
          <Text style={styles.infoText}>Humidity</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default weatherInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e96e50',
    marginBottom: 100,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 45,
    marginLeft: 39, 
  },
  currentTemp: {
    fontSize: 95, 
    fontWeight: '200',
    color: '#ffffff', 
  },
  description: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '300',
    marginTop: 'auto',
    color: '#ffffff',
  },
  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 'auto', 
    marginLeft: 15,
    marginRight: 15, 
  },
  info: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: 'rgba(208, 234, 250, 0.7)', 
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
