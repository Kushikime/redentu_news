import { Form, Input, Item, Label, View } from 'native-base';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { hp, wp } from '../Dimensions';
import { STYLES } from '../styles';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { loggedIn, skippedLogin } from '../store/userReducer';





export const AuthScreen = ({navigation}) => {
    const navigator = useNavigation();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const onLoginPress = async () => {
        let isError = false;

        if(!username || username.trim().length === 0){
            isError = true;
            setUsernameError("Incorrect username")
        }

        if(!password || password.trim().length === 0){
            isError = true;
            setPasswordError("Incorrect password")
        }

        if(isError){
            return;
        }

        await dispatch(loggedIn());
    }

    const onContinuePress = async () =>{
        await dispatch(skippedLogin({skipped: true}));
    }

    const onUsernameChange = (text:string) => {
        setUsername(text);
        setUsernameError("");
    }

    const onPasswordChange = (text:string) => {
        setPassword(text);
        setPasswordError("");
    }

    return (
        <View style={[STYLES.screen, STYLES.flex_center]}>
            <Image style={{maxWidth: wp(150), maxHeight: wp(150), resizeMode: 'contain'}} source={require("../assets/splash.png")} />

            <Form style={[STYLES.w100]}>
                <Item error={(usernameError? true : false)} floatingLabel style={{marginLeft: 0}}>
                    <Label style={(usernameError? STYLES.textRed : STYLES.textGray)}>Username</Label>
                    <Input onChangeText={(text)=>{onUsernameChange(text)}} style={[STYLES.textInput]} />
                </Item>
                <Text style={[STYLES.errorInput]}>{usernameError}</Text>


                <Item error={(passwordError? true : false)} floatingLabel style={{marginLeft: 0, marginTop: hp(-10)}}>
                    <Label style={(usernameError? STYLES.textRed : STYLES.textGray)}>Password</Label>
                    <Input onChangeText={(text)=>{onPasswordChange(text)}} style={[STYLES.textInput]} />
                </Item>
                <Text style={[STYLES.errorInput]}>{passwordError}</Text>
            </Form>

            <View style={[STYLES.w100, STYLES.ai_c, {marginTop: hp(30)}]}>
                <View style={[STYLES.w100]}>
                    <TouchableOpacity onPress={onLoginPress} style={[STYLES.button, STYLES.buttonBlue]}>
                        <Text style={[STYLES.buttonText]}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[STYLES.ta_c, {paddingVertical: hp(10)}]}>or</Text>

                <TouchableOpacity onPress={onContinuePress} style={[]}>
                    <Text style={[STYLES.smallText, STYLES.underlined, STYLES.textGray, STYLES.ta_c]}>Continue without sign in</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    );
};
