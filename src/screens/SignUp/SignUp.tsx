import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {View,Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../../services';
// import {useStores} from '../stores';
import {Section} from '../../components/Section';
import {BButton} from '../../components/Button';
import {useAppearance} from '../../utils/hooks';
import { BasicForm, Separator, Space } from '../../components';
import { colors, gray } from '../../constants';
import { Avatar } from '../../components/Avatar';
import { Txt } from '../../components/Txt';
import { SignUpForm } from './components';

export type SignUpProps = {
  type?: 'push';
};

export const SignUp: NavioScreen<SignUpProps> = observer(({type = 'push'}) => {
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
    navigation.setOptions({});
  };

  // UI Methods

  return (
    <View flex style={{backgroundColor: 'white'}}>
      <Space height={150} />
      <SignUpForm />
      {/* <BasicForm /> */}
    </View>
  );
});

SignUp.options = props => ({
  headerBackTitleStyle: false,
  title: `${'Create an account'} ${(props?.route?.params as SignUpProps)?.type ?? ''}`,
  headerLargeTitleStyle: { color: 'black', fontSize: 30, fontFamily: 'airbnb-bold', alignSelf: 'center' },
});
