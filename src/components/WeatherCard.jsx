import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colors, weatherIcons } from '../scripts/consts';
import { weatherCardStyles } from '../styles/components/WeatherCard'

export default function WeatherCard({ loading, error, temp, pressure, humidity, windSpeed, windDir, icon }) {

  const { t } = useTranslation();

  return (
    <View style={[weatherCardStyles.card, loading && { alignItems: 'center', justifyContent: 'center' }]}>
      {
        loading && <ActivityIndicator size="large" color={colors.dark_green} />
      }
      {
        error && <Text>Erreur</Text>
      }
      {
        !loading && !error &&
        <>
          <View style={weatherCardStyles.card.leftSide}>
            <Text style={weatherCardStyles.card.title}>{t(`weatherCard.descriptions.${icon}`)}</Text>
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
        </>
      }
    </View>
  )
}
