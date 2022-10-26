import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React, { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants'

interface AppButtonT {
  onPress: () => void
  title: string
  disabled?: boolean
  viewStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const AppButton = memo<AppButtonT>(({onPress, title, disabled,textStyle, viewStyle}) => {
  return disabled ? (
    <LinearGradient
        colors={[colors.success[400], colors.red[800]]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={[styles.button, viewStyle]}
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
  ): (
      <LinearGradient
        colors={[colors.success[400], colors.success[800]]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={[styles.button, viewStyle]}
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
  )
})

export { AppButton }

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
    //marginHorizontal: 10
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'airbnb-bold',
    // textAlign: 'center',
    // margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})