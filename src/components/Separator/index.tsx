import { StyleProp, StyleSheet, View, Text, ViewStyle } from 'react-native'
import React, { memo } from 'react'
// import { View } from '../Themed'
// import {colors } from '../../const'

interface Props {
  viewStyle?: StyleProp<ViewStyle>
}

const Separator = memo<Props>(({ viewStyle }) => {
  return (
    <View style={[styles.separator, viewStyle]} lightColor={colors.warmGray[300]} />
  )
})

export { Separator }

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
    height: 1,
    width: '100%',
  },
})