import { ActivityIndicator, Alert, StyleSheet, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native-ui-lib'
import * as SecureStore from 'expo-secure-store'
import { colors } from '../../../constants'
import { Formik } from 'formik';
import * as yup from 'yup';

import { AppInput, Space, Txt } from '../../../components'
import { navio } from '../../../navigator'
import { Auth } from 'aws-amplify'

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Name is required')
    .label('Firstname'),
  lastName: yup
    .string()
    .required('Name is required')
    .label('Lastname'),
  email: yup
    .string().
    label('Email')
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required')
    .label('Confirm Password'),
})

const ButtonSpace = 15;

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState('')
  
  const signUp = ({ email }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'a@a.com') {
          reject(new Error("You playin' with that fake email."))
        }
        resolve(true)
      }, 1000)
    })
  }

  const _onPress = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<void> => {
    const { firstName, lastName, email, password, confirmPassword, } = values
    Alert.alert(JSON.stringify(values))
    // if (password !== confirmPassword) {
    //   setError('Passwords do not match!')
    // } else {
    //   setLoading(true);
    //   setError('');
    //   try {
    //     const user = await Auth.signUp({
    //       username: email,
    //       password: password,
    //       attributes: {
    //         email: email,
    //         givenName: firstName,
    //         familyName: lastName
    //       }
    //     });
    //     await SecureStore.setItemAsync('authKeyEmail', email)
    //     await SecureStore.setItemAsync('authKeyPassword', password)
    //     user && navio.push('ConfirmSignUp', { email, password } )
    //     setLoading(false);
    //   } catch (err: {}) {
    //     setLoading(false);
    //     if (err.code === 'UserNotConfirmedException') {
    //       setError('Account not verified yet');
    //     } else if (err.code === 'PasswordResetRequiredException') {
    //       setError('Existing user found. Please reset your password');
    //     } else if (err.code === 'NotAuthorizedException') {
    //       setError('Forgot Password');
    //     } else if (err.code === 'UserNotFoundException') {
    //       setError('User does not exist!')
    //     } else {
    //       setError(err.code)
    //     }
    //   }
    // }
  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={(values): Promise<void> => _onPress(values)}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <>
            <View style={styles.formContainer}>
            <AppInput
              label="First Name"
              formikProps={formikProps}
              formikKey="lastName"
              placeholder="your given name"
              autoCorrect={false}
              icon="person-fill"
            />
            <AppInput
              label="Last Name"
              formikProps={formikProps}
              formikKey="lastName"
              placeholder="your family name"
              autoCorrect={false}
              icon="person-fill"
            />
            <AppInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              icon="mail"
            />
            <AppInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              icon="lock"
              isPassword
              placeholder="password"
              secureTextEntry={hidePassword}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}  
              textContentType="password"
              autoCapitalize="none"
            />
            <AppInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="connfirmPassword"
              icon="lock"
              isPassword
              placeholder="confirm password"
              secureTextEntry={hidePassword}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}  
              textContentType="password"
              autoCapitalize="none"
            />
            <Space height={10} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginHorizontal: 13
              }}
            >
              <Txt
                title={`By signing up, you agree to our `}
                textStyle={{
                  fontSize: 13,
                  color: colors.coolGray[500],
                  fontFamily: 'airbnb-regular'
                }}
              />
              <Button
                label={`Terms of Service ${ ' '}`}
                link
                labelStyle={{
                  fontFamily: 'airbnb-regular',
                  fontSize: 13,
                  color: colors.blue[500],
                }}
              />
              <Txt
                title={`and ${' '}`}
                textStyle={{
                  fontSize: 13,
                  color: colors.coolGray[500],
                  fontFamily: 'airbnb-regular'
                }}
              />
              <Button
                label={`Privacy Policy.`}
                link
                labelStyle={{
                  fontFamily: 'airbnb-regular',
                  fontSize: 13,
                  color: colors.blue[500],
                }}
              />
            </View>  
            <Space height={25} />
            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ): (
                <>
                  <Button
                    style={{
                      height: 45,
                      marginBottom: ButtonSpace,
                      borderRadius: 4,
                      backgroundColor: colors.pink[800],
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row'
                      }}
                      onPress={formikProps.handleSubmit}
                  >
                    <Txt
                      title={'Agree & Continue'}
                      textStyle={{
                        fontFamily: 'airbnb-bold',
                        color: 'white',
                        fontSize: 16
                      }}
                    />
                  </Button>
                </>
            )}
            </View>
            <Space height={10}/>
          </>
        )}
      </Formik>
    </>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.light[200],
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    // shadowColor: colors.dark[50],
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 2, height: 0 },
    // shadowRadius: 4
  },
})