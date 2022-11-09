import { Keyboard, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, View } from 'react-native-ui-lib';

import { colors } from '../../../../constants'
import { KeyboardAvoidingWrapper, Txt } from '../../../../components';
import { OTPInput } from './OTPInput';
import { ButtonContainer, ButtonText } from './Styles';

const ConfirmSignUpForm = () => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  return (
    <KeyboardAvoidingWrapper>
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
          onPress={()=>{}}
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
    </KeyboardAvoidingWrapper>
  )
}

export { ConfirmSignUpForm }

const styles = StyleSheet.create({})