import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { SharedElement } from 'react-navigation-shared-element';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

const MockDetail = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f0f'}}>
      <SharedElement id={`item.${item.id}.image_url`}>
        <Image
          source={{ uri: item.image_url }}
          style={{
            width: '100%',
            height: ITEM_HEIGHT,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
          resizeMode='cover'
        />
      </SharedElement>
      <MaterialCommunityIcons
        name='close'
        size={28}
        color='#fff'
        style={{
          position: 'absolute',
          top: 40,
          right: 20,
          zIndex: 2,
          backgroundColor: '#555'
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{flexDirection: 'row', marginTop: 10, paddingHorizontal: 20}}
      >
        <SimpleLineIcons size={40} color='white' name={item.iconName} />
        <View style={{ flexDirection: 'column', paddingLeft: 6, justifyContent: 'space-around'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontFamily: 'airbnb-bold',
              lineHeight: 28
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: 'airbnb-bold',
              fontSize: 16,
              lineHeight: 18
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
      <ScrollView
        indicatorStyle='white'
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f'
        }}
        contentContainerStyle={{paddingVertical: 20}}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 17,
            fontFamily: 'airbnb-light',
            lineHeight: 27
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 17,
            fontFamily: 'airbnb-light',
            lineHeight: 27,
            marginBottom: 4
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  )
}
MockDetail.sharedElements = route => {
  const { item } = route.params
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: 'move',
      resize: 'clip'
    }
  ]
}
export { MockDetail }

const styles = StyleSheet.create({})