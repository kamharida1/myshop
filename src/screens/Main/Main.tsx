import { Animated, StyleSheet } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import React, { useMemo, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Search } from '../../components/Search'
import { Loader } from '../../components/Search/components'
import mockList from '../../helpers/mockList'
import { NameListItem } from './components'

const Main = () => {
  const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  const [searchedTerm, setSearchedTerm] = useState('');
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp'
      }),
      new Animated.Value(0),
    ),
    0,
    50,
  )
  const usersList = useMemo(() => {
    if (searchedTerm.length === 0) {
      return mockList;
    }
    const list = mockList.filter((name) => {
      return name.includes(searchedTerm)
    });
    return list;
  }, [searchedTerm])
  
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Animated.View>
      <StatusBar style="dark" />
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <Search searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} clampedScroll={clampedScroll} />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            margin: 20,
            backgroundColor: 'white',
            paddingTop: 50
          }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
            {useNativeDriver: true},
          )}
          contentInsetAdjustmentBehavior="automatic"
        >
          {usersList.map((name, index) =><NameListItem key={index} name={name} />)}
        </Animated.ScrollView>
      </SafeAreaView>
    </Animated.View>
  )
}

export { Main }

const styles = StyleSheet.create({})