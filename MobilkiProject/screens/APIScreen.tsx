import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { IWeather } from '../interfaces/IWeather';

export default function APIScreen() {
  const [weather, setWeather] = React.useState<IWeather>({
    "coord": {
      "lon": 0,
      "lat": 0
    },
    "weather": [
      {
        "id": 0,
        "main": "",
        "description": "",
        "icon": ""
      }
    ],
    "base": "",
    "main": {
      "temp": 0,
      "feels_like": 0,
      "temp_min": 0,
      "temp_max": 0,
      "pressure": 0,
      "humidity": 0
    },
    "visibility": 0,
    "wind": {
      "speed": 0,
      "deg": 0
    },
    "clouds": {
      "all": 0
    },
    "dt": 0,
    "sys": {
      "type": 0,
      "id": 0,
      "message": 0,
      "country": "",
      "sunrise": 0,
      "sunset": 0
    },
    "timezone": 0,
    "id": 0,
    "name": "",
    "cod": 0
    });

  React.useEffect(() => {
    (async (): Promise<void> => {
      const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=56&lon=92&appid=38a001da2e3db521ad5efa9189a76c04')
        .then((response) => response.json())
        setWeather(weather);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Красноярск</Text>
      <Text>{`Температура воздуха: ${Math.round(weather.main.temp - 273.15)}C`}</Text>
      <Text>{`Влажность: ${weather.main.humidity}%`}</Text>
      <Text>{`Атмосферное давление: ${Math.round(weather.main.pressure / 1.33)}мм. рт. ст.`}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});