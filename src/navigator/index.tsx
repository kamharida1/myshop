import {Navio} from 'rn-navio';

import {Main} from '../screens/Main';
import {Playground} from '../screens/Playground';
import {Settings} from '../screens/Settings';
import { Example } from '../screens/Example';
import { Landing } from '../screens/Landing';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions, tabDefaultOptions, getTabBarIcon} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    SignIn,
    SignUp,
    Landing,
    Main,
    Settings,
    Example,
    Playground: {
      component: Playground,
      options: () => ({
        title: 'Playground',
      }),
    },
  },
  stacks: {
    AuthStack: [ 'SignIn', 'Landing', 'SignUp',],
    MainStack: ['Main', 'Example'],
    ExampleStack: ['Example'],
  },
  tabs: {
    MainTab: {
      stack: 'MainStack',
      options: {
        title: 'Home',
        tabBarIcon: getTabBarIcon('MainTab'),
      },
    },
    PlaygroundTab: {
      stack: ['Playground'],
      options: () => ({
        title: 'Playground',
        tabBarIcon: getTabBarIcon('PlaygroundTab'),
      }),
    },
    SettingsTab: {
      stack: ['Settings'],
      options: () => ({
        title: 'Settings',
        tabBarIcon: getTabBarIcon('SettingsTab'),
      }),
    },
  },
  modals: {
    ExampleModal: 'ExampleStack',
  },
  root: 'AuthStack',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
    tab: tabDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
