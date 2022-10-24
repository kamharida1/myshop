import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {colors} from '../../constants'

import { Space } from '../Space'

const AppInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: colors.gray[500],
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    fontFamily: 'airbnb-medium',
    fontSize: 16
    // marginBottom: 3
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = "red"
  }

  return (
    <View style={{marginTop: 5}}>
      <Text style={{marginBottom: 3,color: colors.warmGray[600],fontFamily:'airbnb-medium', fontSize: 16}}>{label}</Text>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      <Space height={2} />
      <Text style={{ color: 'red', fontFamily: 'airbnb-medium' }}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
      <Space height={5} />
    </View>
  )
}

export { AppInput }

const styles = StyleSheet.create({})