import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CssScreen from '../screens/CssScreen';
import PmsScreen from '../screens/PmsScreen';
import EnglishPrecisComposition from '../screens/syllabus/EnglishPrecisComposition';
import EnglishEssayScreen from '../screens/syllabus/EnglishEssayScreen';
import IslamiatScreen from '../screens/syllabus/IslamiatScreen';
import PakAffairsScreen from '../screens/syllabus/PakAffairsScreen';
import GSAScreen from '../screens/syllabus/GSAScreen';
import CurrentAffairsScreen from '../screens/syllabus/CurrentAffairsScreen';
import Group1 from '../screens/syllabus/Group1';
import Group2 from '../screens/syllabus/Group2';
import Group3 from '../screens/syllabus/Group3';
import Group4 from '../screens/syllabus/Group4';
import Group5 from '../screens/syllabus/Group5';
import Group6 from '../screens/syllabus/Group6';
import Group7 from '../screens/syllabus/Group7';



const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CSS" component={CssScreen} />
            <Stack.Screen name="PMS" component={PmsScreen} />
            <Stack.Screen name="Precis" component={EnglishPrecisComposition} />
            <Stack.Screen name="Essay" component={EnglishEssayScreen} />
            <Stack.Screen name="Islamiat" component={IslamiatScreen} />
            <Stack.Screen name="PakAffairs" component={PakAffairsScreen} />
            <Stack.Screen name="Gsa" component={GSAScreen} />
            <Stack.Screen name="current" component={CurrentAffairsScreen} />
            <Stack.Screen name="grp1" component={Group1} />
            <Stack.Screen name="grp2" component={Group2} />
            <Stack.Screen name="grp3" component={Group3} />
            <Stack.Screen name="grp4" component={Group4} />
            <Stack.Screen name="grp5" component={Group5} />
            <Stack.Screen name="grp6" component={Group6} />
            <Stack.Screen name="grp7" component={Group7} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})