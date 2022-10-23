import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from "@react-navigation/native";

import { Icon } from '../Icon'
// import { AirBold } from '../StyledText'
// import { colors } from '../../const'
import { Separator } from '../Separator'

interface LoginHeaderT {
  title?: string
  containerStyle?: StyleProp<ViewStyle>
  iconName?: string
}

const LoginHeader = memo<LoginHeaderT>(({
  containerStyle,
  title,
  iconName,
}) => {
  const navigation = useNavigation();
  return (
    <View >
      <View style={[styles.header, containerStyle]}>
        <Icon
          name={iconName}
          viewStyle={styles.iconStyle}
          size={24}
          // color={colors.gray[600]}
          onPress={()=>navigation.goBack()}
        />
        {/* <AirBold
          style={{
            fontSize: 18,
            marginLeft: 50,
            
          }}
        >
        {title}
        </AirBold> */}
      </View>
      <Separator  />
    </View>
     
  )
})

export { LoginHeader }

const styles = StyleSheet.create({
  header: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    backgroundColor: 'transparent'
  },
  iconStyle: {
    backgroundColor: 'transparent',
    
  }
})