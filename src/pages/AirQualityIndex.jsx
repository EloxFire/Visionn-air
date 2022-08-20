import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import PageHeader from '../components/PageHeader'
import { commonStyles } from '../styles/commonStyles'
import { useTranslation } from 'react-i18next'
import { airQualityIndexStyles } from '../styles/pages/airQualityIndex'

export default function AirQualityIndex({ navigation }) {

  const { t } = useTranslation()

  return (
    <View style={commonStyles.view}>
      <PageHeader title={t('home.app.title')} subtitle={t('home.app.catchPhrase')} />
      <Text style={airQualityIndexStyles.title}>{t('airQualityIndex.title')}</Text>
      <ScrollView style={airQualityIndexStyles.content}>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndex.paragraphs.0')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndex.paragraphs.1')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndex.paragraphs.2')}</Text>
      </ScrollView>
      <View style={airQualityIndexStyles.footer}>
        <TouchableOpacity style={airQualityIndexStyles.footer.button} onPress={() => navigation.goBack()}>
          <Text style={airQualityIndexStyles.footer.button.text}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
