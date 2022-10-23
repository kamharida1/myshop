import React from 'react';
import { View, Text, Incubator } from 'react-native-ui-lib';
import { Space } from '../Space';

const {TextField} = Incubator

export const FlaotingInput: React.FC = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'grey',
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
    <View>
      <TextField
        floatingPlaceholder
        floatingPlaceholderStyle={{}}
        floatingPlaceholderColor={''}
        floatOnFocus
        containerStyle={inputStyles}
        label={label}
        labelProps={''}
        labelStyle={{}}
        labelColor={''}
        trailingAccessory={null}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
      <Space height={2} />
      <Text style={{ color: 'red', fontFamily: 'airbnb-medium' }}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
      <Space height={5} />
    </View>
  );
};
