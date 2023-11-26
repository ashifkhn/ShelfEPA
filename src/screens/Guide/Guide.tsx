import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tomorrow } from './Tabs/Tommorow';
import Today from './Tabs/Today';
import { Yesterday } from './Tabs/Yesterday';
import { getDate } from '../../utils/utils';

const Tab = createMaterialTopTabNavigator();

function CustomHeader() {
  return (
    <View style={{ backgroundColor: "white", padding: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: '600', padding: 16, color: "black" }}>Itinerary Form</Text>
    </View>
  );
}

function GuideTabsWithHeader() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <Tab.Navigator
        initialRouteName="Today" 
        tabBarOptions={{
          labelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabStyle: { paddingBottom: 8 },
          activeTintColor: 'black', // Set the active tab font color
        }}
      >
        <Tab.Screen
          name="Yesterday"
          component={Yesterday}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: focused ? 'black' : 'gray' }}>
                Yesterday{'\n'} <Text style={{ fontSize: 10, fontWeight: '300', textAlign: 'center', color: "#000000" }}>{getDate(-1)}</Text>
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: focused ? 'black' : 'gray' }}>
                Today{'\n'} <Text style={{ fontSize: 10, fontWeight: '300', textAlign: 'center', color: "#000000" }}>{getDate(0)}</Text>
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Tomorrow"
          component={Tomorrow}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: focused ? 'black' : 'gray' }}>
                Tomorrow{'\n'} <Text style={{ fontSize: 10, fontWeight: '300', textAlign: 'center', color: "#000000" }}>{getDate(1)}</Text>
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}


export default GuideTabsWithHeader;
