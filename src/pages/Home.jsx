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

  useEffect(() => {
    // getAirQuality()
  }, []);

  const getAirQuality = async () => {
    console.log("Getting air data...");
    axios.get('http://api.airvisual.com/v2/nearest_city?key=c252ce21-327b-4c8a-977a-4c197fb5e4a4')
      .then((response) => {
        setIqa(response.data.data.current.pollution.aqius);
        setMpName(response.data.data.current.pollution.mainus);
        setCity(response.data.data.city);
      }).catch((error) => {
        console.log(error.message);
      })
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
        <Text style={homeStyles.content.subtitle}>{t('home.titles.weather.sub', { city: city })}</Text>
        <WeatherCard />
      </View>
    </View>
  )
}
