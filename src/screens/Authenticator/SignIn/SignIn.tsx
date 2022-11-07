import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native-ui-lib';

import {useAppearance} from '../../../utils/hooks';
import { Space } from '../../../components';
import { SignInForm } from './components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../AppNavigator';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SIGN_IN'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

export const SignIn = ({navigation}: SignUpT): ReactElement => {
  useAppearance(); // for Dark Mode
  // Start
  useEffect(() => {
    configureUI();
  }, []);

  // UI Methods
  const configureUI = () => {
    navigation.setOptions({});
  };

  return (
    <View flex style={{backgroundColor: 'white'}}>
      <Space height={150} />
      <SignInForm />
      {/* <BasicForm /> */}
    </View>
  );
};

SignIn.options = {
  headerBackTitleStyle: false,
  title: `${'Log in'} `,
  headerLargeTitleStyle: { color: 'black', fontSize: 30, fontFamily: 'airbnb-bold', alignSelf: 'center' },
};
