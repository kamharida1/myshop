import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const deviceWidth = Dimensions.get('window').width;


const NameListItem = ({name}) => {
  return (
    <View style={{
      height: 60,
      width: deviceWidth,
      marginLeft: 40,
      borderBottomWidth: 1,
      borderColor: '#DBDBDB',
      justifyContent: 'center'
    }}>
      <Text style={{fontSize: 18, fontWeight: '700'}}>{name}</Text>
    </View>
  )
}

export { NameListItem }

const styles = StyleSheet.create({})