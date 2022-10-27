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
import { useServices } from '../../../services'

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

export const SignInForm = () => {
  const [loading, setLoading] = useState(false)
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
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          signUp({ email: values.email})
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
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="johndoe@example.com"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confirm password"
              secureTextEntry
              textContentType="password"
              autoCapitalize="none"
            />
            <Space height={20} />
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