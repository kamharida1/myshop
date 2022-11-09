import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native-ui-lib';

import {useAppearance} from '../../../utils/hooks';
import { Space } from '../../../components';
import { FakeSignUpForm } from './components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../AppNavigator';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../constants';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SIGN_UP'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

export const SignUp = ({navigation}: SignUpT): ReactElement=> {
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
    <ScrollView  contentInsetAdjustmentBehavior="automatic">
      <View>
        <FakeSignUpForm />
        {/* <BasicForm /> */}
      </View>
    </ScrollView>
  );
};

SignUp.options = {
  headerBackTitleStyle: false,
  title: 'Create an account',
  headerLargeTitleStyle: { color: 'black', fontSize: 30, alignSelf: 'center' },
};
