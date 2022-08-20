import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import PageHeader from '../components/PageHeader'
import { commonStyles } from '../styles/commonStyles'
import { useTranslation } from 'react-i18next'
import { airQualityIndexStyles } from '../styles/pages/airQualityIndex'

export default function AirQualityIndexCalculation({ navigation }) {

  const { t } = useTranslation()

  return (
    <View style={commonStyles.view}>
      <PageHeader title={t('home.app.title')} subtitle={t('home.app.catchPhrase')} />
      <Text style={airQualityIndexStyles.title}>{t('airQualityIndexCalculation.title')}</Text>
      <ScrollView style={airQualityIndexStyles.content}>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.0')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.1')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.2')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.3')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.4')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.5')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.6')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.7')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.8')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.9')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.10')}</Text>
        <Text style={airQualityIndexStyles.content.text}>{t('airQualityIndexCalculation.paragraphs.11')}</Text>
        <Text style={[airQualityIndexStyles.content.text, { marginBottom: 50 }]}>{t('airQualityIndexCalculation.paragraphs.12')}</Text>
      </ScrollView>
      <View style={airQualityIndexStyles.footer}>
        <TouchableOpacity style={airQualityIndexStyles.footer.button} onPress={() => navigation.goBack()}>
          <Text style={airQualityIndexStyles.footer.button.text}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
