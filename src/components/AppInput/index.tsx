import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {colors} from '../../constants'

import { Space } from '../Space'

const AppInput = ({ label, formikProps, formikKey, ...rest }) => {
  // const inputStyles = {
  //   borderWidth: 1,
  //   borderColor: colors.gray[500],
  //   borderRadius: 8,
  //   padding: 15,
  //   marginVertical: 5,
  //   fontFamily: 'airbnb-medium',
  //   fontSize: 16
  //   // marginBottom: 3
  // };

  // if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
  //   inputStyles.borderColor = "red"
  // }

  return (
    <View style={styles.attributeContainer}>
      <Text style={{marginBottom: 3,color: colors.warmGray[600],fontFamily:'airbnb-medium', fontSize: 16}}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        />
      </View>
       <Space height={1} />
       <Text style={{ color: 'red', fontFamily: 'airbnb-medium' }}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
    </View>
  )
}

export { AppInput }

const styles = StyleSheet.create({
  attributeContainer: {
    marginVertical: 4,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 2,
    
  },
  textInput: {
    height: 48,
    padding: 10,
    fontSize: 16,
    fontFamily: 'airbnb-regular'
  },
})