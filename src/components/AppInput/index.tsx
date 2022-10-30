import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

import {colors} from '../../constants'

import { Space } from '../Space'
import { color } from 'react-native-reanimated';

const AppInput = ({ label, icon, isPassword, hidePassword, setHidePassword, formikProps, formikKey, ...rest }) => {

  return (
    // <View style={styles.attributeContainer}>
    //   <Text style={{marginBottom: 3,color: colors.warmGray[600],fontFamily:'airbnb-medium', fontSize: 16}}>{label}</Text>
    //   <View style={styles.textInputContainer}>
    //     <TextInput
    //       style={styles.textInput}
    //       onChangeText={formikProps.handleChange(formikKey)}
    //       onBlur={formikProps.handleBlur(formikKey)}
    //       {...rest}
    //     />
    //   </View>
    //    <Space height={1} />
    //    <Text style={{ color: 'red', fontFamily: 'airbnb-medium' }}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
    // </View>
    <View>
      <View
        style={{
          left: 15,
          top: 43,
          position: 'absolute',
          zIndex: 1
        }}
      >
        <Octicons name={icon} size={25} color={colors.dark[400]} style={{fontWeight: '500'}} />
      </View>
      <Text style={{margin: 5, color: colors.warmGray[600],fontFamily:'airbnb-medium', fontSize: 14 }}>{label}</Text>
      <TextInput
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        style={{
          fontFamily: 'airbnb-regular',
          backgroundColor: '#fff',
          borderColor: colors.dark[400],
          borderWidth: StyleSheet.hairlineWidth,
          padding: 15,
          paddingLeft: 53,
          paddingRight: 53,
          borderRadius: 5,
          fontSize: 16,
          height: 50,
          marginVertical: 3,
          marginBottom: 10,
          color: colors.gray[800]
        }}
        {...rest}
      />
      {isPassword && (
        <Pressable
          style={{
            right: 20,
            top: 43,
            position: 'absolute',
            zIndex: 1
          }}
          onPress={() => {
            setHidePassword(!hidePassword)
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={25} color={colors.dark[400]} />
        </Pressable>
      )}
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