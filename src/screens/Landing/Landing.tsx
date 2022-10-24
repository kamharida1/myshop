import React, {useEffect, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Button, View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../../services';
// import {useStores} from '../stores';
import {Section} from '../../components/Section';
import {BButton} from '../../components/Button';
import {useAppearance} from '../../utils/hooks';
import { AppButton, AppInput, Icon, Separator, Space } from '../../components';
import { colors } from '../../constants';
import { Txt } from '../../components/Txt';
import Apple from '../../../assets/svg/Apple'
import Facebook from '../../../assets/svg/Facebook'
import Google from '../../../assets/svg/Google'
import Mail from '../../../assets/svg/Mail'


export type LandingProps = {
  type?: 'push';
};

const ButtonSpace = 15;

export const Landing: NavioScreen<LandingProps> = observer(({type = 'push'}) => {
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
  useLayoutEffect(() => {
    configureUI();
  }, []);

  // UI Methods
  const configureUI = () => {
    navigation.setOptions({
     
    });
  };

  // UI Methods

  return (
    <View useSafeArea flex bg-bgColor>
      <View>
        <Icon
          name="close"
          bounceable
          color= {colors.warmGray[700]}
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
          }}
          onPress={goBack}
        />
      </View>
      <Space height={150} />
      <View centerH >
        <Txt h0 textStyle={{letterSpacing: 4, marginBottom: 10}} title={ 'AGU BROTHERS'} />
        <Txt h7 textStyle={{}} title={ 'Your Marketplace'} />
      </View>
      <Space height={120} />
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
        <Button
          style={{
            height: 45,
            marginBottom: ButtonSpace,
            borderRadius: 4,
            backgroundColor: colors.gray[200],
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
        >
          <Txt
            title={'Sign up with email'}
            textStyle={{
              fontFamily: 'airbnb-bold',
              color: 'black',
              fontSize: 16
            }}
          />
        </Button>
      </View>
      <Space height={30} />
      <View row marginH-s4 centerV center>
        <Txt
          h4
          title={'Already have an account? '}
          textStyle={{marginRight: 3}}
        />
        <Button
          label="Log in"
          link
          linkColor={colors.blue[700]}
          labelStyle={{
            fontFamily: 'airbnb-medium',
            fontSize: 17
          }}
        />
      </View>
      <Space height={50} />
      <View centerH marginH-s4>
        <Button
          label="Learn more about AguBrothers"
          link
          labelStyle={{
            fontFamily: 'airbnb-regular',
            fontSize: 13,
            color: colors.coolGray[500],
          }}
        />
        <Separator
          viewStyle={{
            position: 'absolute',
            bottom: 0.02,
            width: 185
          }}
        />
      </View>
      <Space height={60} />
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
          title={`By signing up or logging in, you agree to our `}
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
    </View>
  );
});

const styles = StyleSheet.create({
  loginContainer: {
    padding: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    marginHorizontal: 15,
    borderColor: colors.warmGray[300],
    borderRadius: 10
  }
})

Landing.options = props => ({
  // headerBackTitleStyle: false,
  // title: `${"Log in or sign up"} ${(props?.route?.params as LandingProps)?.type ?? ''}`,
  // headerLargeTitleStyle: { color: 'black', fontSize: 30, fontFamily: 'airbnb-bold', alignSelf: 'center' },
  // headerStyle: { backgroundColor: 'rgba(255,255,255, 0.8)' },
  headerShown: false
});
