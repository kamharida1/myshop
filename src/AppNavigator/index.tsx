import * as React from 'react'
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignIn, SignUp, Landing, ConfirmSignUp } from '../screens/Authenticator'
import { Main, Mock, MockDetail } from '../screens'
import { colors } from '../constants'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { AuthContext } from '../contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const SharedStack = createSharedElementStackNavigator();

export type RootStackParamList = {
  LANDING: undefined
  SIGN_UP: undefined
  SIGN_IN: undefined
  // FORGOT: { email: string }
  // FORGOT_PASSWORD_SUBMIT: { email: string }
  CONFIRM_SIGN_UP: { email: string; password: string }
  MAIN: undefined
  MOCK: undefined
  MOCK_DETAIL: { item: {} }
  MOCK_STACK: undefined
}

const MockStack = () => {
  return (
    <SharedStack.Navigator initialRouteName='MOCK'>
      <SharedStack.Screen
        name="MOCK"
        component={Mock}
        options={{
          headerShown: false
        }}
      />
      <SharedStack.Screen
        name="MOCK_DETAIL"
        component={MockDetail}
        options={{
          headerShown: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress
              }
            }
          }
        }}
      />
    </SharedStack.Navigator>
  )
}

const AppNavigator = (): React.ReactElement => {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const [checking, setIsChecking] = React.useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLargeTitleStyle: {fontFamily:'airbnb-bold', color: colors.light[800]},
          headerLargeTitle: true,
          headerLargeStyle: {},
          headerShadowVisible: false,
          headerTintColor: colors.blueGray[500],
          headerBackTitleVisible: false,
          //animation: 'slide_from_bottom',
          //presentation: 'formSheet'
          // gestureDirection: 'vertical',
        }}
        initialRouteName="LANDING"
      > 
        {
          isLoggedIn ? (
            <>
              <Stack.Screen
                name="MOCK_STACK"
                component={MockStack}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="MAIN"
                component={Main}
                options={{
                  headerShown: false
                }}
              />
            </>
          ): (
              <>
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="LANDING"
                  component={Landing}
                />
                <Stack.Screen
                  options={{
                    headerTitle: 'Create an account'
                  }}
                  name="SIGN_UP"
                  component={SignUp}
                />
                <Stack.Screen
                  options={{
                    headerTitle: 'Log in'
                  }}
                  name="SIGN_IN"
                  component={SignIn}
                />
                {/* <Stack.Screen name="FORGOT" component={Forgot} />
                <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />  */}
                <Stack.Screen
                  name="CONFIRM_SIGN_UP"
                  component={ConfirmSignUp}
                  options={{
                    headerTitle: 'Email Verification'
                  }}
                />
              </>
        )
      }
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default AppNavigator