import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {AuthScreen} from '../screens/AuthScreen';
import {NewsScreen} from '../screens/NewsScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import { DrawerContent } from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { NewsDetailsScreen } from '../screens/NewsDetailsScreen';

const NewsStack = createStackNavigator();

 const NewsNavigator = () => {

    return (
        <NewsStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <NewsStack.Screen name={"NewsScreen"}  component={NewsScreen}/>
            <NewsStack.Screen name={"NewsDetailsScreen"}  component={NewsDetailsScreen}/>
        </NewsStack.Navigator>
    );
 };

 export default NewsNavigator;
