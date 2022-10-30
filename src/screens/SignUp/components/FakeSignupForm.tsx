import { ActivityIndicator, Alert, StyleSheet, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native-ui-lib'
import * as SecureStore from 'expo-secure-store'


import { colors } from '../../../constants'
import { Formik } from 'formik';
import * as yup from 'yup';

import Google from '../../../../assets/svg/Google'
import { AppInput, AppButton, FloatingInput, Separator, Space, Txt, Icon, KeyboardAvoidingWrapper } from '../../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { useServices } from '../../../services'
import { values } from 'lodash'
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
    .email()
    .required(),
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

export const FakeSignUpForm = () => {
  const [loading, setLoading] = useState(false)
  const [hidePassword, setHidePassword] = useState(true);
  // const { setIsLoggedIn } = React.useContext(AuthContext)
  const {t, navio} = useServices();
  // const {ui} = useStores();
  const pushStack = () => navio.pushStack('MainStack');


  useEffect(() => {
    setLoading(true)
    const key = async (): Promise<void> => {
      try {
        const email = await SecureStore.getItemAsync('authKeyEmail')
        const password = await SecureStore.getItemAsync('authKeyPassword')
        const credentials = { email, password }
        
        if (credentials) {
          const { email, password } = credentials;
          const user = await Auth.signIn(email, password);
          setLoading(false);
          user && setIsLoggedIn(true)
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.log('error', err);
        setLoading(false);
      }
    };
    key();
  }, []);
  
  const signUp = async ({firstName, lastName, email, password }) => {
    const response = await Auth.signUp(
      {
        username: email,
        password,
        attributes: {
          email,
          given_name: firstName,
          family_name: lastName
        }
      });
      console.log(response)
    
  }

  return (
    <KeyboardAvoidingWrapper>
      <Formik
        initialValues={{ firstName:'', lastName: '' ,email: '', password: '', confirmPassword:'', }}
        onSubmit={(values, actions) => {
          const {firstName, lastName, email, password} = values
          signUp({ firstName, lastName, email, password})
            .then(() => {
              Alert.alert(JSON.stringify(values))
              pushStack()
            })
            .catch(error => {
              actions.setFieldError("general", error.message)
            })
            .finally(() => {
              actions.setSubmitting(false)
            })
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <>
            <View style={styles.formContainer}>
              <AppInput
              label="First Name"
              formikProps={formikProps}
              formikKey="firstName"
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
              <AppInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              icon="lock"
              isPassword
              placeholder="confirm password"
              secureTextEntry={hidePassword}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}  
              textContentType=" confirmpassword"
              autoCapitalize="none"
            />
              <Space height={20} />
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
                      title={'Log in'}
                      textStyle={{
                        fontFamily: 'airbnb-bold',
                        color: 'white',
                        fontSize: 16
                      }}
                    />
                  </Button>

                  <Text style={{color: 'red'}}>{formikProps.errors.general}</Text>
                </>
            )}
            </View>
            <Space height={10} />
          </>
        )}
      </Formik>
    </KeyboardAvoidingWrapper>
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