import React, {useEffect, useRef, useState} from 'react';
import {Pressable, ScrollView, TextInput, Keyboard} from 'react-native';
import {Button, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import { NavioScreen } from 'rn-navio';


import {services, useServices} from '../../services';
// import {useStores} from '../stores';
import {Section} from '../../components/Section';
import {BButton} from '../../components/Button';
import {useAppearance} from '../../utils/hooks';
import { Header, OTPInput } from './components';
import { AppInput, Txt } from '../../components';
import { ButtonContainer, ButtonText, ScreenContainer } from './components/Styles';
import { colors } from '../../constants';

export type ConfirmSignUpProps = {
  type?: 'push';
  email?: string;
  password?: string
};


export const ConfirmSignUp: NavioScreen<ConfirmSignUpProps> = observer(({ type = 'push', email, password }) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  useAppearance(); // for Dark Mode
  const navigation = useNavigation();
  const {t, navio} = useServices();
  // const {ui} = useStores();

  // State

  // Methods
  const push = () => navio.push('Example', {type: 'push'});
  const pushStack = () => navio.pushStack('ExampleStack');
  const jumpTo = () => navio.jumpTo('PlaygroundTab');
  const show = () => navio.show('ExampleModal');
  const setRoot = () => navio.setRoot('Tabs');
  const goBack = () => navio.pop();

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

  // UI Methods

  return (
    <ScreenContainer>
      <View marginV-20> 
        <Text style={{fontSize: 25, fontFamily: 'airbnb-medium', marginVertical: 20, marginBottom: 40}}>
          Enter Code
        </Text>
        <View centerV row>
          <Text style={{ fontFamily: 'airbnb-medium',}}>
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
          h7
          title={`Didn\'t recieve the OTP? ${' '}`}
          textStyle={{marginRight: 3}}
        />
        <Button
          label="RESEND OTP"
          link
          linkColor={colors.blue[700]}
          labelStyle={{
            fontFamily: 'airbnb-bold',
            fontSize: 15,
            textTransform: 'uppercase'
          }}
          onPress={push}
        />
      </View>

        <ButtonContainer
          disabled={!isPinReady}
          style={{
            backgroundColor: !isPinReady ? colors.warmGray[200] : colors.dark[200],
            alignSelf: 'center'
          }}
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
});

ConfirmSignUp.options = props => ({
  headerBackTitleStyle: false,
  title: `${'Email Verification'} `,
  headerLargeTitleStyle: { color: 'black', fontSize: 30, fontFamily: 'airbnb-bold', alignSelf: 'center' },
});
