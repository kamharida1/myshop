import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

interface SpaceT {
  height?: number
}

const Space = memo<SpaceT>(({ height }) => {
  return (
    <View style={{ height: height || 30 }} />
  )
})

export { Space }

const styles = StyleSheet.create({})