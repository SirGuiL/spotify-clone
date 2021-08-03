import { 
  AntDesign, 
  EvilIcons, 
  MaterialIcons, 
  FontAwesome5,
  Foundation 
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Library from '../screens/Library';
import AlbumScreen from '../screens/AlbumScreen';
import { TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    

    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, style: { backgroundColor: '#191414'} }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="home" size={28} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="search1" color={color} size={28} />,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="my-library-music" color={color} size={28} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" color={color} size={28} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={Home}
        options={{ headerTitle: 'Home', headerShown: false }}
      />

      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album', headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Search}
        options={{ headerTitle: 'Search', headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={Library}
        options={{ headerTitle: 'Library', headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}
