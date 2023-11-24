import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Today, Tomorrow, Yesterday } from './../Guide/Tabs/GuideTabs';

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
      <Tab.Navigator>
        <Tab.Screen name="Yesterday" component={Yesterday} />
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Tomorrow" component={Tomorrow} />
      </Tab.Navigator>
    </View>
  );
}

export default GuideTabsWithHeader;