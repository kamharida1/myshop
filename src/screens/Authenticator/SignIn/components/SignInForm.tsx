import { ActivityIndicator, Alert, StyleSheet, Text, } from 'react-native'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { View, Button } from 'react-native-ui-lib'
import * as SecureStore from 'expo-secure-store'


import { black, colors, onScreen } from '../../../../constants'
import { Formik } from 'formik';
import * as yup from 'yup';

import Google from '../../../../../assets/svg/Google'
import { AppInput, Separator, Space, Txt, Icon, KeyboardAvoidingWrapper } from '../../../../components'
import { useServices } from '../../../../services'
import { Auth } from 'aws-amplify'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../AppNavigator'
import { AuthContext } from '../../../../contexts/AuthContext'

const validationSchema = yup.object().shape({
  email: yup
    .string().
    label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password')
})

const ButtonSpace = 15;

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SIGN_IN'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

export const SignInForm = ({ navigation }: SignUpT): ReactElement => {
  const {setIsLoggedIn} = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [hidePassword, setHidePassword] = useState(true);
  
  const _signIn = async (values: { email: string; password: string }) => {
    setError('')
    try {
      const { email, password } = values
      const user = await Auth.signIn(email, password)
      console.log(JSON.stringify(user))
      await SecureStore.setItemAsync('authKeyEmail', email)
      await SecureStore.setItemAsync('AuthKeyPassword', password)
      setIsLoggedIn(true)
      setLoading(false)
    } catch ({ code }) {
      setLoading(false)
      if (code === 'UserNotConfirmedException') {
        setError('Account not verified yet')
      } else if (code === 'PasswordResetRequiredException') {
        setError("Existing user found. Please reset your password")
      } else if (code === 'NotAuthorizedException') {
        setUserInfo(values)
        setError('Forgot Password?')
      } else if ( code === 'UserNotFoundException') {
        setError('User does not exist!')
      } else {
        setError(code)
      }
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <Formik
        enableReinitialize
        initialValues={userInfo}
        onSubmit={(values) => _signIn(values)}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <>
            <View style={styles.formContainer}>
              <AppInput
                label="Email"
                formikProps={formikProps}
                formikKey="email"
                placeholder="agubiggest@example.com"
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
              <Space height={10} />
              {error !== 'Forgot Password?' && (
                      <Text style={{color: 'red'}}>{error}</Text>
                    )}
                    {error === 'Forgot Password?' && (
                      <Button
                        link
                        linkColor={colors.blue[500]}
                        label={'Forgot Password? '}
                        labelStyle={{ fontFamily: 'airbnb-medium', alignSelf: 'center', marginBottom: 15}}
                        labelProps={{ fontSize: 17, color: colors.dark[100] }}
                        onPress = {onScreen('FORGOT', navigation, userInfo)}
                      />
              )}
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
                        title={'Log in'}
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
              <Space height={10} />
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15 }}>
                  <Separator viewStyle={{ width: '45%' }} />
                  <Txt
                    title='or'
                    h7
                    textStyle={{
                      marginHorizontal: 10,
                      fontSize: 16,
                      color: colors.warmGray[200],
      
                    }} /> 
                    <Separator viewStyle={{ width: '45%' }} />
            </View>
            
              <Space height={40} />
              <View marginH-s4>
              <Button
                style={{
                  height: 45,
                  marginBottom: ButtonSpace,
                  borderRadius: 4,
                  backgroundColor: colors.blue[600],
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row'
                }}
              >
                <Icon
                  name="facebook"
                  size={22}
                  color= {colors.warmGray[50]}
                  style={{ marginRight: 7 }}
                />
                <Txt
                  title={'Continue with Facebook'}
                  textStyle={{
                    fontFamily: 'airbnb-bold',
                    color: 'white',
                    fontSize: 16
                  }}
                />
                </Button>
                <Space height={10} />
              <Button
                style={{
                  height: 45,
                  marginBottom: ButtonSpace,
                  borderRadius: 4,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  shadowRadius: 5,
                  shadowOpacity: 0.2,
                  shadowOffset: { width: 2, height: 0}
                }}
                outline
                outlineColor={colors.dark[700]}
              >
                <Google style={{ marginRight: 7}} />
                <Txt
                  title={'Continue with Google'}
                  textStyle={{
                    fontFamily: 'airbnb-bold',
                    color: 'black',
                    fontSize: 16
                  }}
                />
                </Button>
                <Space height={10} />
              <Button
                style={{
                  height: 45,
                  marginBottom: ButtonSpace,
                  borderRadius: 4,
                  backgroundColor: colors.dark[50],
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row'
                }}
              >
                <Icon
                  name="apple"
                  size={22}
                  color= {colors.warmGray[50]}
                  style={{ marginRight: 7 }}
                />
                <Txt
                  title={'Continue with Apple'}
                  textStyle={{
                    fontFamily: 'airbnb-bold',
                    color: 'white',
                    fontSize: 16
                  }}
                />
              </Button>
        </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingWrapper>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: colors.gray[50],
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
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