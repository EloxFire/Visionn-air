import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import PageHeader from '../components/PageHeader'
import { commonStyles } from '../styles/commonStyles'
import { homeStyles } from '../styles/pages/home'
import { useTranslation } from 'react-i18next'
import AirQualityCard from '../components/AirQualityCard'
import axios from 'axios'
import WeatherCard from '../components/WeatherCard'
import { colors } from '../scripts/consts'

export default function Home() {

  const { t } = useTranslation()

  const [mpName, setMpName] = useState('');
  const [city, setCity] = useState('');
  const [iqa, setIqa] = useState('');
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentPressure, setCurrentPressure] = useState(0);
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(0);
  const [currentWindDirection, setCurrentWindDirection] = useState(0);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    console.log("Getting data...");
    axios.get('http://api.airvisual.com/v2/nearest_city?key=c252ce21-327b-4c8a-977a-4c197fb5e4a4')
      .then((response) => {
        setIqa(response.data.data.current.pollution.aqius);
        setMpName(response.data.data.current.pollution.mainus);
        setCity(response.data.data.city);
        setCurrentTemp(response.data.data.current.weather.tp);
        setCurrentPressure(response.data.data.current.weather.pr);
        setCurrentHumidity(response.data.data.current.weather.hu);
        setCurrentWindSpeed(response.data.data.current.weather.ws);
        setCurrentWindDirection(getCardinalDirection(response.data.data.current.weather.wd));
      }).catch((error) => {
        console.log(error.message);
      })
  }

  const getCardinalDirection = (angle) => {
    if (typeof angle === 'string') angle = parseInt(angle);
    if (angle <= 0 || angle > 360 || typeof angle === 'undefined') return '☈';
    const arrows = { north: '↑ N', north_east: '↗ NE', east: '→ E', south_east: '↘ SE', south: '↓ S', south_west: '↙ SW', west: '← W', north_west: '↖ NW' };
    const directions = Object.keys(arrows);
    const degree = 360 / directions.length;
    angle = angle + degree / 2;
    for (let i = 0; i < directions.length; i++) {
      if (angle >= (i * degree) && angle < (i + 1) * degree) return arrows[directions[i]];
    }
    return arrows['north'];
  }

  return (
    <View style={commonStyles.view}>
      <PageHeader title="VISIONN'AIR" subtitle="Visualisez l'état de l'environnement" />
      <View style={homeStyles.content}>
        <Text style={homeStyles.content.title}>{t('home.titles.airQuality.main')}</Text>
        <Text style={homeStyles.content.subtitle}>{city === "" ? <ActivityIndicator size="small" color={colors.white} /> : t('home.titles.airQuality.sub', { city: city })}</Text>
        <AirQualityCard iqa={iqa} main_polluent_name={mpName} />
      </View>

      <View style={homeStyles.content}>
        <Text style={homeStyles.content.title}>{t('home.titles.weather.main')}</Text>
        <Text style={homeStyles.content.subtitle}>{city === "" ? <ActivityIndicator size="small" color={colors.white} /> : t('home.titles.airQuality.sub', { city: city })}</Text>
        <WeatherCard
          temp={currentTemp}
          pressure={currentPressure}
          humidity={currentHumidity}
          windSpeed={currentWindSpeed}
          windDir={currentWindDirection}
        />
      </View>

      <View style={homeStyles.content}>
        <Text style={homeStyles.content.title}>{t('home.titles.more.main')}</Text>
      </View>
    </View>
  )
}
