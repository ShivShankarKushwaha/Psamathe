import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Post from './Components/Post';
import Chats from './Components/Chats';
import Profile from './Components/Profile';
import { Image } from 'react-native';
import UserReset from './Components/UserReset';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen options={{ tabBarLabel: 'Home', tabBarIcon: ({ focused, color, size }) => (<Image style={{ width: 30, height: 30 }} source={require('./public/home.jpeg')}></Image>)}} name='Home' component={Post}></Tab.Screen>
            <Tab.Screen options={{ tabBarLabel: 'Chats', tabBarIcon: ({ focused, color, size }) => (<Image style={{ width: 30, height: 30 }} source={{ uri: 'https://source.unsplash.com/random/?chats' }}></Image>) }} name='Chats' component={Chats}></Tab.Screen>
            <Tab.Screen options={{ tabBarLabel: 'Profile', tabBarIcon: ({ focused, color, size }) => (<Image style={{ width: 30, height: 30}} source={{ uri: 'https://source.unsplash.com/random/?profile' }}></Image>) }} name='Profile' component={Profile}></Tab.Screen>
            <Tab.Screen options={{ tabBarStyle: { display: "none" }, }} name='Reset' component={UserReset}></Tab.Screen>
        </Tab.Navigator>
        </NavigationContainer>
  )
}

export default App;