import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { data } from '../../config/data';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Mock = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#0f0f0f'}}>
      <StatusBar hidden />
      {/* Header */}
      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20}}>
        <Text style={{ color: '#888', textTransform: 'uppercase'}}>
          Saturday 9 January
        </Text>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600'}}>
          Today
        </Text>
      </View>
      {/* Scrollable conntent */}
      <View style={{flex: 1, paddingBottom: 20}}>
        <ScrollView
          indicatorStyle='white'
          contentContainerStyle={{alignItems: 'center'}}
        >
          {data.map(item => (
            <View key={item.id}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginBottom: 14 }}
                onPress={()=>navigation.navigate('MOCK_DETAIL', {item})}
              >
                <Image
                  style={{
                    borderRadius: 14,
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                  }}
                  source={{uri: item.image_url}}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 10
                  }}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <SimpleLineIcons size={40} color='white' name={item.iconName} />
                    <View style={{flexDirection: 'column', paddingLeft: 6}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 24,
                          fontWeight: 'bold',
                          lineHeight: 28,
                          //fontFamily: 'airbnb-bold'
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: 'bold',
                          lineHeight: 18,
                          //fontFamily: 'airbnb-bold'
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export { Mock }

const styles = StyleSheet.create({})