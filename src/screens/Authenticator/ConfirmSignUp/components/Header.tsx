import { StyleSheet,} from 'react-native'
import React from 'react'
import { Text, View } from 'react-native-ui-lib'
import { Icon, Space, Txt } from '../../../../components'


const Header = () => {
  return (
    <View style={styles.container} >
      <Icon
        name="keyboard-backspace"
        onPress={()=>{}}
      />
      <Space />
      <Txt  title="Email Verification" />
    </View>
  )
}

export { Header }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    alignItems: 'center'
  }
})