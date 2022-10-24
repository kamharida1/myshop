import { StyleProp, StyleSheet, View, Text, ViewStyle } from 'react-native'
import React, { memo } from 'react'
// import { View } from '../Themed'
import {colors } from '../../constants'

interface Props {
  viewStyle?: StyleProp<ViewStyle>
}

const Separator = memo<Props>(({ viewStyle }) => {
  return (
    <View style={[styles.separator, viewStyle]} />
  )
})

export { Separator }

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colors.coolGray[400],
    marginVertical: 5,
    height: 1,
    width: '100%',
  },
})