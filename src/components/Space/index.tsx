import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

interface SpaceT {
  height?: number
  width?: number
}

const Space = memo<SpaceT>(({ height, width }) => {
  return (
    <View style={{
      height: height || 30,
      width: width || 20
    }} />
  )
})

export { Space }

const styles = StyleSheet.create({})