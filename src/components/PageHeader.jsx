import React from 'react'
import { View, Text, Image } from 'react-native'
import { pageHeaderStyles } from '../styles/components/pageHeader'

export default function PageHeader({ title, subtitle }) {
  return (
    <View style={pageHeaderStyles.header}>
      <Image style={pageHeaderStyles.header.icon} resizeMode="contain" source={require("../../assets/img/icons/leaf.png")} />
      <View>
        <Text style={pageHeaderStyles.header.title}>{title}</Text>
        {subtitle && <Text style={pageHeaderStyles.header.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  )
}
