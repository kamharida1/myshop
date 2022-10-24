import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants'

interface AppButtonT {
  onPress: () => void
  title: string
  disabled?: boolean
}

const AppButton = memo<AppButtonT>(({onPress, title, disabled}) => {
  return disabled ? (
    <LinearGradient
        colors={['#EC0868', colors.red[600]]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
  ): (
      <LinearGradient
        colors={['#EC0868', colors.red[600]]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
  )
})

export { AppButton }

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    //marginHorizontal: 10
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'airbnb-medium',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})