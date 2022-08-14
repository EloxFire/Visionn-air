import React from 'react'
import { View, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { commonStyles } from '../styles/commonStyles'

export default function Home() {
  return (
    <View style={commonStyles.view}>
      <Text style={{ color: "white", fontFamily: 'GilroyBold', fontSize: RFPercentage(10) }}>Hello world !</Text>
    </View>
  )
}
