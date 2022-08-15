import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { weatherCardStyles } from '../styles/components/WeatherCard'

export default function WeatherCard({ temp, pressure, humidity, windSpeed, windDir }) {

  const { t } = useTranslation();

  return (
    <View style={weatherCardStyles.card}>
      <View style={weatherCardStyles.card.leftSide}>
        <Text style={weatherCardStyles.card.title}>{t('weatherCard.temperature')}</Text>
        <Text style={weatherCardStyles.card.number}>{temp}<Text style={{ fontSize: RFPercentage(3) }}>°C</Text> </Text>
      </View>
      <View style={weatherCardStyles.card.rightSide}>
        <Text style={{ fontSize: RFPercentage(2) }}>{t('weatherCard.humidity')} {humidity} %</Text>
        <Text style={{ fontSize: RFPercentage(2) }}>{t('weatherCard.humidity')} {pressure} hPa</Text>
        <Text style={{ fontSize: RFPercentage(2) }}>{t('weatherCard.windSpeed')} {windSpeed} m/s</Text>
        <Text style={{ fontSize: RFPercentage(2) }}>{t('weatherCard.windDirection')} {windDir} </Text>
      </View>
    </View>
  )
}
