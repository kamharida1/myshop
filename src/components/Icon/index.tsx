import React, {useMemo} from 'react';
import {View, Colors, ViewProps} from 'react-native-ui-lib';
import {Ionicons, Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
import {Bounceable} from 'rn-bounceable';
import { StyleProp, ViewStyle } from 'react-native';

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  viewProps?: ViewProps;
  onPress?: PureFunc;
  bounceable?: boolean;
  style?: StyleProp<ViewStyle>
};

const ICON_SIZE = 30;

export const IconComponent =  MaterialCommunityIcons ;
export const Icon: React.FC<IconProps> = ({
  name,
  size = ICON_SIZE,
  color = Colors.textColor,
  viewProps,
  onPress,
  style,
  bounceable = true,
}: IconProps) => {
  const Icon = useMemo(
    () => (
      <View {...viewProps}>
        <IconComponent name={name} size={size} color={color} style={style} />
      </View>
    ),
    [viewProps, name, size, color],
  );

  if (!bounceable) return Icon;
  return (
    <Bounceable onPress={onPress} disabled={!!!onPress}>
      {Icon}
    </Bounceable>
  );
};
