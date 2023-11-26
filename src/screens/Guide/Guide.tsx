import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tomorrow } from './../Guide/Tabs/GuideTabs';
import Today from './Tabs/Today';
import { Yesterday } from './Tabs/Yesterday';

const Tab = createMaterialTopTabNavigator();

function CustomHeader() {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>Your Header Title</Text>
    </View>
  );
}

function GuideTabsWithHeader() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabStyle: { paddingBottom: 8 },
        }}
      >
        <Tab.Screen
          name="Yesterday"
          component={Yesterday}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                Yesterday{'\n'} <Text style={{ fontSize: 10, fontWeight: '300', textAlign: 'center',color:"#000000" }}>{getYesterdayDate()}</Text>
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                Today{'\n'} <Text style={{ fontSize: 10, fontWeight: '300', textAlign: 'center',color:"#000000" }}>{getTodaysDate()}</Text>
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Tomorrow"
          component={Tomorrow}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center',color:"#000000" }}>
                Tomorrow{'\n'} <Text style={{ fontSize: 10, fontWeight: '300', textAlign: 'center',color:"#000000" }}>{getTommorowDate()}</Text>
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

function getYesterdayDate(param:number) {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  const options = { day: 'numeric', month: 'short' };
  return yesterday.toLocaleDateString(undefined, options);
}
function getTodaysDate(param:number) {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate());
  const options = { day: 'numeric', month: 'short' };
  return yesterday.toLocaleDateString(undefined, options);
}
function getTommorowDate(param:number) {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() + 1);
  const options = { day: 'numeric', month: 'short' };
  return yesterday.toLocaleDateString(undefined, options);
}

export default GuideTabsWithHeader;
