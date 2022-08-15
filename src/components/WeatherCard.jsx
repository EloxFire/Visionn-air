import { t } from 'i18n-js'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { qualityColors } from '../scripts/consts'
import { weatherCardStyles } from '../styles/components/WeatherCard'

export default function WeatherCard({ }) {

  const { t } = useTranslation();


  return (
    <View style={weatherCardStyles.card}>
      <View style={weatherCardStyles.card.leftSide}>
        <Text style={weatherCardStyles.card.title}>{t('airQualityCard.indicator')}</Text>
      </View>
      <View style={weatherCardStyles.card.rightSide}>
      </View>
    </View>
  )
}
