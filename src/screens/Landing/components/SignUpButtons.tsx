import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from "@react-navigation/native";

import Apple from '../../../../assets/svg/Apple'
import Google from '../../../../assets/svg/Google'
import Facebook from '../../../../assets/svg/Facebook'
import Mail from '../../../../assets/svg/Mail'
import {services, useServices} from '../../../services';

// import { colors } from '../../../const'

interface SignUpButtonsT{
  onPress?: () => void
  mail?: boolean
}

const SignUpButtons = memo<SignUpButtonsT>(({ onPress, mail }) => {
  const navigation = useNavigation();
  const { navio } = useServices();

  return (
    <View style={styles.mainContainer}>
      {mail && (
        <TouchableOpacity onPress={()=>{navio.push('SignIn')}} style={styles.button}>
        <Mail style={styles.icon} />
        <Text style={styles.textStyle}>Continue With Email</Text>
      </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Apple style={styles.icon} />
        <Text style={styles.textStyle}>Continue With Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Google style={styles.icon} />
        <Text style={styles.textStyle}>Continue With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Facebook style={styles.icon} />
        <Text style={styles.textStyle}>Continue With Facebook</Text>
      </TouchableOpacity>
    </View>
  )
})

export { SignUpButtons }

const styles = StyleSheet.create({
  mainContainer: {
    flexgrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 2
  },
  icon: {
    margin: 10,
    marginRight: 70
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray[600],
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderRadius: 8,
  },
  textStyle: {
    fontFamily: 'airbnb-medium',
    fontSize: 17,
    color: colors.warmGray[800],
    alignSelf: 'center'
  },
})