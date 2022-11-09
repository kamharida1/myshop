import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {Pressable, Keyboard} from 'react-native';
import {Button, Text, View} from 'react-native-ui-lib';
import {RouteProp} from '@react-navigation/native';

import {useAppearance} from '../../../utils/hooks';
import {  OTPInput } from './components';
import {  Txt } from '../../../components';
import { ButtonContainer, ButtonText, ScreenContainer } from './components/Styles';
import { colors, onScreen } from '../../../constants';
import { Auth } from 'aws-amplify';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../AppNavigator';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CONFIRM_SIGN_UP'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CONFIRM_SIGN_UP'>

type ConfirmSignUpT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

export const ConfirmSignUp = ({route, navigation}: ConfirmSignUpT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;
  useAppearance(); // for Dark Mode

  

  // Start
  useEffect(() => {
    configureUI();
  }, []);

  // UI Methods
  const configureUI = () => {
    navigation.setOptions({
      //headerShown: false
    });
  };

  const _onPress = async () => {
    setLoading(true)
    setError('')
    const {email, password} = route.params
    try {
      await Auth.confirmSignUp(email, otpCode, { forceAliasCreation: true })
      const user = await Auth.signIn(email, password);
      user && onScreen('MAIN', navigation)();
      setLoading(false)
    } catch (err: any) {
      setLoading(false);
      setError(err.message)
      if (err.code === 'UserNotConfirmedException') {
        setError('Account not verified yet');
      } else if (err.code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password');
      } else if (err.code === 'NotAuthorizedException') {
        setError('Forgot Password?');
      } else if (err.code === 'UserNotFoundException') {
        setError('User does not exist!');
      }
    }
  }

  const _onResend = async () => {
    const { email } = route.params;
    try {
      await Auth.resendSignUp(email)
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <ScreenContainer>
      <View marginV-20> 
        <Text style={{fontSize: 25, marginVertical: 20, marginBottom: 40}}>
          Enter Code
        </Text>
        <View centerV row>
          <Text>
            {'*'}{ ' '}We have sent the confirmation code to
            <Text>{' '}your email address</Text>
          </Text>
        </View>
      </View>
      <Pressable onPress={Keyboard.dismiss} style={{marginTop: 20}}>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />

        <View row marginH-s4 marginT-50 centerV center>
        <Txt
          title={`Didn\'t recieve the OTP? ${' '}`}
          textStyle={{marginRight: 3}}
        />
        <Button
          label="RESEND OTP"
          link
          linkColor={colors.blue[700]}
          labelStyle={{
            //fontFamily: 'airbnb-bold',
            fontSize: 15,
            textTransform: 'uppercase'
          }}
          onPress={_onResend}
        />
      </View>

        <ButtonContainer
          disabled={!isPinReady}
          style={{
            backgroundColor: !isPinReady ? colors.warmGray[200] : colors.dark[200],
            alignSelf: 'center'
          }}
          onPress={_onPress}
        >
          <ButtonText
            style={{
              color: !isPinReady ? colors.warmGray[400] : colors.coolGray[200]
            }}
          >
            Proceed
          </ButtonText>
        </ButtonContainer>
      </Pressable>
    </ScreenContainer>
  );
};

