import React from 'react'
import { View, Text } from 'react-native'
import PageHeader from '../components/PageHeader'
import { commonStyles } from '../styles/commonStyles'
import { homeStyles } from '../styles/pages/home'

export default function Home() {
  return (
    <View style={commonStyles.view}>
      <PageHeader title="VISIONN'AIR" subtitle="Visualisez l'état de l'environnement" />
    </View>
  )
}
