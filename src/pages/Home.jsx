import React from 'react'
import { View, Text } from 'react-native'
import PageHeader from '../components/PageHeader'
import { commonStyles } from '../styles/commonStyles'
import { homeStyles } from '../styles/pages/home'
import { useTranslation } from 'react-i18next'

export default function Home() {

  const { t } = useTranslation()

  return (
    <View style={commonStyles.view}>
      <PageHeader title="VISIONN'AIR" subtitle="Visualisez l'état de l'environnement" />
      <View style={homeStyles.content}>
        <Text style={homeStyles.content.title}>{t('home.title')}</Text>
      </View>
    </View>
  )
}
