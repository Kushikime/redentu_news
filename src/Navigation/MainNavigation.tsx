import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {AuthScreen} from '../screens/AuthScreen';
import {NewsScreen} from '../screens/NewsScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import { DrawerContent } from './DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import NewsNavigator from './NewsNavigator';
import { AdditionalScreen } from './../screens/AdditionalScreen';

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

 const MainNavigation = () => {

    const authPassed = useSelector(state => state.user.authPassed);
    const skippedLogin = useSelector(state => state.user.skippedAuth);
    



    return (
        <NavigationContainer>
            {
            authPassed || skippedLogin ?
                    <Drawer.Navigator screenOptions={{
                        gestureEnabled: true,
                        swipeEnabled: true,
                        headerShown: false
                    }} drawerContent={(props)=>{return <DrawerContent {...props} />}}>
                        <Drawer.Screen name={"NewsNavigator"}  component={NewsNavigator}/>
                        <Drawer.Screen name={"ProfileScreen"}  component={ProfileScreen}/>
                        <Drawer.Screen name={"AdditionalScreen"}  component={AdditionalScreen}/>
                    </Drawer.Navigator>
                :
                    <AuthStack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <AuthStack.Screen name={"AuthScreen"}  component={AuthScreen}/>
                    </AuthStack.Navigator>
            }
        </NavigationContainer>
    );
 };

 export default MainNavigation;
