import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hp } from '../Dimensions';
import { loggedOut } from '../store/userReducer';
import { STYLES } from '../styles';




export const DrawerContent = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const doLogout = async () => {
        await dispatch(loggedOut());
    }

    const authPassed = useSelector(state => state.user.authPassed);



    return (
        <SafeAreaView style={[STYLES.screen, STYLES.fd_c, STYLES.jc_sp, STYLES.ai_fs, {paddingVertical: hp(30), }]}>
            <View style={[STYLES.w100]}>
                <TouchableOpacity style={[STYLES.drawerButton]} onPress={()=>{navigation.navigate("NewsScreen")}}>
                    <Image source={require("../assets/icons/newsScreen.png")}  style={[STYLES.drawerButtonIcon]} />
                    <Text style={[STYLES.drawerItemText]}>News</Text>
                </TouchableOpacity>


                {/* ON PROFILE SCREEN IF AUTH === FALSE REDIRECT TO AUTH, OR SHOW A RELATED TEXT*/}
                <TouchableOpacity style={[STYLES.drawerButton]} onPress={()=>{navigation.navigate("ProfileScreen")}}>
                    <Image source={require("../assets/icons/profileScreen.png")} style={[STYLES.drawerButtonIcon]}  />
                    <Text style={[STYLES.drawerItemText]}>Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[STYLES.drawerButton]} onPress={()=>{navigation.navigate("AdditionalScreen")}}>
                    <Image source={require("../assets/icons/other.png")} style={[STYLES.drawerButtonIcon]}  />
                    <Text style={[STYLES.drawerItemText]}>Other</Text>
                </TouchableOpacity>
            </View>


            {/* SHOW ONLY IF AUTH === TRUE */}
            {
                authPassed ?
                    <View style={[STYLES.w100]}>
                        <TouchableOpacity style={[STYLES.drawerButton]} onPress={()=>{doLogout()}}>
                            <Image source={require("../assets/icons/logout.png")} style={[STYLES.drawerButtonIcon]} />
                            <Text style={[STYLES.drawerItemText]}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <></>
            }


        </SafeAreaView>
    );
};