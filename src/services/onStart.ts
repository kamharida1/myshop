import * as Font from 'expo-font';
import {IconComponent} from '../components/Icon';
import { stores } from '../stores';

let customFonts = {
  'airbnb-bold': require('../../assets/fonts/AirbnbCereal_W_Bd.otf'),
  'airbnb-regular': require('../../assets/fonts/AirbnbCereal_W_Bk.otf'),
  'airbnb-bold-black': require('../../assets/fonts/AirbnbCereal_W_Blk.otf'),
  'airbnb-light': require('../../assets/fonts/AirbnbCereal_W_Lt.otf'),
  'airbnb-medium': require('../../assets/fonts/AirbnbCereal_W_Md.otf'),
  'airbnb-extra-bold': require('../../assets/fonts/AirbnbCereal_W_XBd.otf'),
}

export class OnStartService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.incAppLaunches();

      await this.loadAssets();

      this.inited = true;
    }
  };

  private loadAssets = async () => {
    const fonts = [
      IconComponent.font,
      customFonts
    ];

    const fontAssets = fonts.map(font => Font.loadAsync(font));

    await Promise.all([...fontAssets]);
  };

  private incAppLaunches() {
    const {ui} = stores;

    ui.set('appLaunches', ui.appLaunches + 1);
  }
}
