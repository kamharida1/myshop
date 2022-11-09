import { StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import Svg, { Circle, Rect } from 'react-native-svg'

export const deviceWidth = Dimensions.get('window').width;

const Loader = props => {
  return (
    <SvgAnimatedLinearGradient
      width={(deviceWidth - 70) / 2}
      {...props}
    >
      <Rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
      <Rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
      <Rect x="0" y="80" rx="3" ry="3" width="250" height="6.4" />
      <Rect x="0" y="100" rx="3" ry="3" width="250" height="6.4" />
      <Rect x="0" y="120" rx="3" ry="3" width="250" height="6.4" />
      <Circle cx="30" cy="30" r="30" />
    </SvgAnimatedLinearGradient>
  )
}

export { Loader }

const styles = StyleSheet.create({})