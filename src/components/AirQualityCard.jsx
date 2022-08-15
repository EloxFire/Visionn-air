import { t } from 'i18n-js'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { colors, qualityColors } from '../scripts/consts'
import { airQualityCardStyle } from '../styles/components/AirQualityCard'

export default function AirQualityCard({ iqa, main_polluent_name }) {

  const { t } = useTranslation();

  const [currentBackgroundColor, setCurrentBackgroundColor] = useState("#FFFFFF");

  useEffect(() => {
    iqa === "" && setCurrentBackgroundColor("#FFFFFF");
    iqa <= 50 && iqa !== "" && setCurrentBackgroundColor(qualityColors.good);
    iqa > 50 && iqa <= 100 && iqa !== "" && setCurrentBackgroundColor(qualityColors.moderate);
    iqa > 100 && iqa <= 150 && iqa !== "" && setCurrentBackgroundColor(qualityColors.unhealthy_sensitive);
    iqa > 150 && iqa <= 200 && iqa !== "" && setCurrentBackgroundColor(qualityColors.unhealthy);
    iqa > 200 && iqa <= 300 && iqa !== "" && setCurrentBackgroundColor(qualityColors.very_unhealthy);
    iqa > 300 && setCurrentBackgroundColor(qualityColors.hazardous);
  }, [iqa])



  return (
    <View style={airQualityCardStyle.card}>
      <View style={airQualityCardStyle.card.leftSide}>
        <Text style={airQualityCardStyle.card.title}>{t('airQualityCard.indicator')}</Text>
        <Text style={[airQualityCardStyle.card.number, { color: currentBackgroundColor }]}>{iqa === "" ? <ActivityIndicator size="large" color={colors.dark_green} /> : iqa}</Text>
      </View>
      <View style={airQualityCardStyle.card.rightSide}>
        <Text style={[airQualityCardStyle.card.quality, iqa > 100 && iqa <= 150 && { fontSize: RFPercentage(2.8) }]}>
          {iqa === "" && <ActivityIndicator size="large" color={colors.dark_green} />}
          {iqa <= 50 && iqa !== "" && t('airQualityCard.values.good')}
          {iqa > 50 && iqa <= 100 && t('airQualityCard.values.moderate')}
          {iqa > 100 && iqa <= 150 && t('airQualityCard.values.unhealthyForSensitiveGroups')}
          {iqa > 150 && iqa <= 200 && t('airQualityCard.values.unhealthy')}
          {iqa > 200 && iqa <= 300 && t('airQualityCard.values.veryUnhealthy')}
          {iqa > 300 && t('airQualityCard.values.hazardous')}
        </Text>
        <Text style={airQualityCardStyle.card.title}>
          {t('airQualityCard.mainPolluentTitle')}
          {main_polluent_name === "p2" && t('airQualityCard.mainPolluents.pm25.short')}
          {main_polluent_name === "p1" && t('airQualityCard.mainPolluents.pm10.short')}
          {main_polluent_name === "o3" && t('airQualityCard.mainPolluents.o3.short')}
          {main_polluent_name === "no2" && t('airQualityCard.mainPolluents.no2.short')}
          {main_polluent_name === "so2" && t('airQualityCard.mainPolluents.so2.short')}
          {main_polluent_name === "co" && t('airQualityCard.mainPolluents.co.short')}
          {main_polluent_name === "" && <ActivityIndicator size="large" color={colors.dark_green} />}
        </Text>
        {/* <Text style={airQualityCardStyle.card.title}>{t('airQualityCard.mainPolluentSubtitle')} {main_polluent_value} {main_polluent_unit}</Text> */}
      </View>
    </View >
  )
}
