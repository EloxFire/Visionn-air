import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import PageHeader from '../components/PageHeader'
import { commonStyles } from '../styles/commonStyles'
import { homeStyles } from '../styles/pages/home'
import { useTranslation } from 'react-i18next'
import AirQualityCard from '../components/AirQualityCard'
import axios from 'axios'
import WeatherCard from '../components/WeatherCard'
import { capitalizeFirstLetter, colors } from '../scripts/consts'
import { RFPercentage } from 'react-native-responsive-fontsize'
import * as Location from 'expo-location';
import moment from 'moment'

export default function Home({ navigation }) {

  const { t } = useTranslation()

  const [mpName, setMpName] = useState('');
  const [city, setCity] = useState('');
  const [iqa, setIqa] = useState('');
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentPressure, setCurrentPressure] = useState(0);
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(0);
  const [currentWindDirection, setCurrentWindDirection] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('01d');
  const [fetchTime, setFetchTime] = useState(new Date());
  const [dataFetched, setDataFetched] = useState(false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      getData()
    }
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const getData = async () => {
    // console.log("Location :", location);
    if (location !== null) {
      console.log("LAT :", location.coords.latitude);
      console.log("LON :", location.coords.longitude);
      console.log("Getting data...");
      axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${location.coords.latitude}&lon=${location.coords.longitude}&key=da579a97-22ae-4ca6-80df-4aac9a9ef032`)
        .then((response) => {
          setIqa(response.data.data.current.pollution.aqius);
          setMpName(response.data.data.current.pollution.mainus);
          setCity(response.data.data.city);
          setCurrentTemp(response.data.data.current.weather.tp);
          setCurrentPressure(response.data.data.current.weather.pr);
          setCurrentHumidity(response.data.data.current.weather.hu);
          setCurrentWindSpeed(response.data.data.current.weather.ws);
          setCurrentWindDirection(getCardinalDirection(response.data.data.current.weather.wd));
          setWeatherIcon(response.data.data.current.weather.ic);
          setFetchTime(new Date());
          setDataFetched(true);
          setLoading(false);
        }).catch((error) => {
          console.log(error.message);
          setLoading(false);
          setError(true);
        })
    } else {

    }
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
      <PageHeader title={t('home.app.title')} subtitle={t('home.app.catchPhrase')} />
      <View style={homeStyles.content}>
        <Text style={homeStyles.content.title}>{t('home.titles.airQuality.main')}</Text>
        <Text style={homeStyles.content.subtitle}>{city === "" ? <ActivityIndicator size="small" color={colors.white} /> : t('home.titles.airQuality.sub', { city: city, time: capitalizeFirstLetter(moment().fromNow(fetchTime)) })}</Text>
        <AirQualityCard loading={loading} error={error} iqa={iqa} main_polluent_name={mpName} />
      </View>

      <View style={homeStyles.content}>
        <Text style={homeStyles.content.title}>{t('home.titles.weather.main')}</Text>
        <Text style={homeStyles.content.subtitle}>{city === "" ? <ActivityIndicator size="small" color={colors.white} /> : t('home.titles.airQuality.sub', { city: city, time: capitalizeFirstLetter(moment().fromNow(fetchTime)) })}</Text>
        <WeatherCard
          loading={loading}
          error={error}
          temp={currentTemp}
          pressure={currentPressure}
          humidity={currentHumidity}
          windSpeed={currentWindSpeed}
          windDir={currentWindDirection}
          icon={weatherIcon}
        />
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: RFPercentage(3) }}>
        <View style={{ backgroundColor: colors.white, width: '90%', height: 1, opacity: .5 }}></View>
      </View>

      <View style={[homeStyles.content, { paddingTop: RFPercentage(2) }]}>
        <Text style={homeStyles.content.title}>{t('home.titles.more.main')}</Text>
        <Text style={homeStyles.content.subtitle}>{t('home.titles.more.sub')}</Text>

        <View style={{ marginTop: RFPercentage(2) }}>
          <TouchableOpacity onPress={() => navigation.navigate('IQA')} style={{ marginTop: RFPercentage(1) }}>
            <Text style={homeStyles.content.link}>{t('home.titles.more.links.iqa')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('IQACalculation')} style={{ marginTop: RFPercentage(1) }}>
            <Text style={homeStyles.content.link}>{t('home.titles.more.links.airQuality')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FrequencyUpdate')} style={{ marginTop: RFPercentage(1) }}>
            <Text style={homeStyles.content.link}>{t('home.titles.more.links.data')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
