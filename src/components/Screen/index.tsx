import React, {memo} from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  scroll?: boolean
  style?: StyleProp<ViewStyle>
}

const Screen = memo<Props>(({ scroll, style, children }) => {
  return scroll ? (
    <ScrollView
      testID='scrollview-screen'
      style={[styles.container, style]}
    >
      {children}
    </ScrollView>
  ) : (
      <SafeAreaView testID="view-screen" style={[styles.container,style]}>
        {children}
      </SafeAreaView>
  )
});

export { Screen }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 36,
  }
})