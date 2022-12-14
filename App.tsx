import 'expo-dev-client';
import React, {useCallback, useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import {AppRoot} from './src/navigator';
import {
  configureDesignSystem,
  getNavigationTheme,
  getStatusBarBGColor,
  getStatusBarStyle,
} from './src/utils/designSystem';
import {hydrateStores} from './src/stores';
import {initServices} from './src/services';
import {SSProvider} from './src/utils/providers';
import {StatusBar} from 'expo-status-bar';
import { useAppearance } from './src/utils/hooks';
import { AuthProvider } from './src/contexts/AuthContext';

import {Amplify}  from 'aws-amplify';
import awsconfig from './src/aws-exports';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

Amplify.configure(awsconfig);

LogBox.ignoreLogs(['Require']);

export default (): JSX.Element => {
  useAppearance();
  const [ready, setReady] = useState(false);

  const start = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();

    await hydrateStores();
    configureDesignSystem();
    await initServices();

    setReady(true);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    start();
  }, [start]);

  if (!ready) return <></>;
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SSProvider>
          <StatusBar style={getStatusBarStyle()} backgroundColor={getStatusBarBGColor()} />
          <AuthProvider>
            <AppNavigator />
          </AuthProvider>
        </SSProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
};
