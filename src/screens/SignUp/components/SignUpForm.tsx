import { ActivityIndicator, Alert, StyleSheet, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native-ui-lib'
import * as SecureStore from 'expo-secure-store'


import { colors } from '../../../constants'
import { Formik } from 'formik';
import * as yup from 'yup';

import Google from '../../../../assets/svg/Google'
import { AppInput, AppButton, FloatingInput, Separator, Space, Txt, Icon } from '../../../components'
import { LinearGradient } from 'expo-linear-gradient'

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
  // const { setIsLoggedIn } = React.useContext(AuthContext)

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
        onSubmit={(values, actions) => {
          signUp({ email: values.email})
            .then(() => {
             Alert.alert(JSON.stringify(values))
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
              formikKey="lastName"
              placeholder="your given name"
            />
            <AppInput
              label="Last Name"
              formikProps={formikProps}
              formikKey="lastName"
              placeholder="your family name"
            />
            <AppInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
            />
            <AppInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="password"
              secureTextEntry
            />
            <AppInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confirm password"
              secureTextEntry
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