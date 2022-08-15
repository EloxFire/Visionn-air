import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { weatherIcons } from '../scripts/consts';
import { weatherCardStyles } from '../styles/components/WeatherCard'

export default function WeatherCard({ temp, pressure, humidity, windSpeed, windDir, icon }) {

  const { t } = useTranslation();

  return (
    <View style={weatherCardStyles.card}>
      <View style={weatherCardStyles.card.leftSide}>
        <Text style={weatherCardStyles.card.title}>{t(`weatherCard.descriptions.${icon}`)}</Text>
        {/* <Text style={weatherCardStyles.card.number}>{temp}<Text style={{ fontSize: RFPercentage(3) }}>°C</Text> </Text> */}
        <Image style={weatherCardStyles.card.icon} resizeMode="contain" source={weatherIcons[icon]} />
      </View>
      <View style={weatherCardStyles.card.rightSide}>
        <View style={weatherCardStyles.card.rightSide.column}>
          <View style={weatherCardStyles.card.rightSide.info}>
            <Text>{t('weatherCard.temperature')}</Text>
            <Text style={weatherCardStyles.card.rightSide.info.value}>{temp}°C</Text>
          </View>
          <View style={weatherCardStyles.card.rightSide.info}>
            <Text>{t('weatherCard.humidity')}</Text>
            <Text style={weatherCardStyles.card.rightSide.info.value}>{humidity} %</Text>
          </View>
          <View style={weatherCardStyles.card.rightSide.info}>
            <Text>{t('weatherCard.pressure')}</Text>
            <Text style={weatherCardStyles.card.rightSide.info.value}>{pressure} hPa</Text>
          </View>
        </View>
        <View style={weatherCardStyles.card.rightSide.column}>
          <View style={weatherCardStyles.card.rightSide.info}>
            <Text>{t('weatherCard.windSpeed')}</Text>
            <Text style={weatherCardStyles.card.rightSide.info.value}>{windSpeed} m/s</Text>
          </View>
          <View style={weatherCardStyles.card.rightSide.info}>
            <Text>{t('weatherCard.windDirection')}</Text>
            <Text style={weatherCardStyles.card.rightSide.info.value}>{windDir} </Text>
          </View>
        </View>


      </View>
    </View>
  )
}
