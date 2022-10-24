import { Platform, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import React, { memo } from 'react';
import { useTheme } from "@react-navigation/native";
import { ScaledSheet } from 'react-native-size-matters';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {
  W,
  colors,
  Airblack,
  Airbold,
  Airlight,
  Airmedium,
  Airthin,
  KLMN
} from '../../constants';

 const { primary, secondary, dark, coolGray, gray, warmGray } = colors

const styles = ScaledSheet.create({
  h0Style: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '25@s',
    fontFamily: Airbold,
    color: dark[50]
  },
  h0StyleDark: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '35@s',
    fontFamily: Airbold,
    color: secondary[600]
  },
  h1Style: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: Airmedium,
    textShadowColor: secondary[800],
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: dark[100]
  },
  h1StyleDark: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: Airmedium,
    textShadowColor: primary[800],
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: coolGray[100]
  },
  h2Style: {
    fontSize: Platform.OS === 'ios' ? '30@s' : '30@s',
    fontFamily: Airbold,
    textShadowColor: secondary[600],
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    color: dark[200]
  },
  h2StyleDark: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: Airblack,
    textShadowColor: primary[600],
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    color: gray[200]
  },
  h3Style: {
    fontSize: Platform.OS === 'ios' ? '20@s' : '20@s',
    fontFamily: Airlight,
    textShadowColor: secondary[600],
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: warmGray[500]
  },
  h3StyleDark: {
    fontSize: Platform.OS === 'ios' ? '20@s' : '20@s',
    fontFamily: Airlight,
    textShadowColor: primary[600],
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    color: dark[400]
  },
  h4Style: {
    fontSize: Platform.OS === 'ios' ? '13@s' : '13@s',
    fontFamily: Airthin,
    fontWeight: 'bold',
    color: warmGray[800]
  },
  h4StyleDark: {
    fontSize: Platform.OS === 'ios' ? '18@s' : '18@s',
    fontFamily: Airthin,
    fontWeight: 'bold',
    color: warmGray[700]
  },
  h5Style: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: Airthin,
    fontWeight: 'bold',
    color: warmGray[400]
  },
  h5StyleDark: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Airmedium,
    fontWeight: 'bold',
    color: warmGray[700]
  },
  h6Style: {
    fontSize: Platform.OS === 'ios' ? '13@s' : '13@s',
    fontFamily: Airlight,
    color: dark[50],
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  h6StyleDark: {
    fontSize: Platform.OS === 'ios' ? '13@s' : '13@s',
    fontFamily: Airlight,
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: coolGray[50]
  },
  h7Style: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: Airmedium,
    color: dark[100]
  },
  h7StyleDark: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: Airmedium,
    color: gray[50]
  },
  h8Style: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Airlight,
    color: secondary[400]
  },
  h8StyleDark: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Airthin,
    color: primary[600]

  },
  h9Style: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Airmedium
  },
  h9StyleDark: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: Airmedium
  },
  cancelStyle: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '35@s',
    fontFamily: Airblack,
    color: secondary[700]
  },
  cancelStyleDark: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '35@s',
    fontFamily: Airblack,
    color: secondary[900]
  },
  bodyStyle: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      },
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      }
    ),
    fontFamily: Airlight,
    color: coolGray[800]
  },
  bodyStyleDark: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      },
      {
        fontSize: Platform.OS === 'ios' ? '13@s' : '13@s'
      }
    ),
    fontFamily: Airlight,
    color: coolGray[800]
  }
})

interface TxtT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  h7?: boolean
  h8?: boolean
  h9?: boolean
  body?: boolean
  title: string
  cancel?: boolean
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  textStyle?: StyleProp<TextStyle>
  ViewStyle?: StyleProp<ViewStyle>
}

const Txt = memo<TxtT>(
  ({h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,body,title,textStyle,numberOfLines,ellipsizeMode, cancel }) => {
    const { dark } = useTheme()
    const {
      h0Style,
      h1Style,
      h2Style,
      h3Style,
      h4Style,
      h5Style,
      h6Style,
      h7Style,
      h8Style,
      h9Style,
      cancelStyle,
      bodyStyle,
      h0StyleDark,
      h1StyleDark,
      h2StyleDark,
      h3StyleDark,
      h4StyleDark,
      h5StyleDark,
      h6StyleDark,
      h7StyleDark,
      h8StyleDark,
      h9StyleDark,
      cancelStyleDark,
      bodyStyleDark
    } = styles
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        textStyle,
        h0 && StyleSheet.flatten([dark ? h0StyleDark : h0Style]),
        h1 && StyleSheet.flatten([dark ? h1StyleDark : h1Style]),
        h2 && StyleSheet.flatten([dark ? h2StyleDark : h2Style]),
        h3 && StyleSheet.flatten([dark ? h3StyleDark : h3Style]),
        h4 && StyleSheet.flatten([dark ? h4StyleDark : h4Style]),
        h5 && StyleSheet.flatten([dark ? h1StyleDark : h1Style]),
        h6 && StyleSheet.flatten([dark ? h6StyleDark : h6Style]),
        h7 && StyleSheet.flatten([dark ? h7StyleDark : h7Style]),
        h8 && StyleSheet.flatten([dark ? h8StyleDark : h8Style]),
        h9 && StyleSheet.flatten([dark ? h9StyleDark : h9Style]),
        cancel && StyleSheet.flatten([dark ? cancelStyleDark : cancelStyle]),
        body && StyleSheet.flatten([dark ? bodyStyleDark : bodyStyle])
      ]}
    >
      {title}
    </Text>
  )
})

export { Txt }