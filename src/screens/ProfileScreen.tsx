import { Form, Input, Item, Label } from 'native-base';
import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hp, wp } from '../Dimensions';
import { skippedLogin } from '../store/userReducer';
import { STYLES } from '../styles';





export const ProfileScreen = ({navigation}:any) => {
    
    const dispatch = useDispatch();

    const authPassed = useSelector(state => state.user.authPassed);

    const [loading, setLoading] = useState(false);

    const [username, setUsername] = useState("Erik");
    const [usernameError, setUsernameError] = useState("");

    const [email, setEmail] = useState("test@gmail.com");
    const [emailError, setEmailError] = useState("");

    const [age, setAge] = useState("18");
    const [ageError, setAgeError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const onSavePress = () => {
        setLoading(true);

        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    }

    const onLoginPress = async () => {
        await dispatch(skippedLogin({skipped: false}));
    }

    return (
        <SafeAreaView style={[STYLES.screen, {paddingTop: hp(30)}]}>
            {
                authPassed ? 
                    <>
                        <Form style={[STYLES.w100]}>
                            
                            <Item error={(usernameError? true : false)} floatingLabel style={{marginLeft: 0}}>
                                <Label style={(usernameError? STYLES.textRed : STYLES.textGray)}>Username</Label>
                                <Input defaultValue={username} onChangeText={(text)=>{setUsername(text)}} style={[STYLES.textInput]} />
                            </Item>
                            <Text style={[STYLES.errorInput]}>{usernameError}</Text>

                            <Item error={(usernameError? true : false)} floatingLabel style={{marginLeft: 0}}>
                                <Label style={(usernameError? STYLES.textRed : STYLES.textGray)}>Email</Label>
                                <Input defaultValue={email} onChangeText={(text)=>{setEmail(text)}} style={[STYLES.textInput]} />
                            </Item>
                            <Text style={[STYLES.errorInput]}>{emailError}</Text>

                            <Item error={(usernameError? true : false)} floatingLabel style={{marginLeft: 0}}>
                                <Label style={(usernameError? STYLES.textRed : STYLES.textGray)}>Age</Label>
                                <Input defaultValue={age} onChangeText={(text)=>{setAge(text)}} style={[STYLES.textInput]} />
                            </Item>
                            <Text style={[STYLES.errorInput]}>{ageError}</Text>

                            <Item error={(usernameError? true : false)} floatingLabel style={{marginLeft: 0}}>
                                <Label style={(usernameError? STYLES.textRed : STYLES.textGray)}>New password</Label>
                                <Input defaultValue={password} onChangeText={(text)=>{setPassword(text)}} style={[STYLES.textInput]} />
                            </Item>
                            <Text style={[STYLES.errorInput]}>{passwordError}</Text>

                        </Form>

                    
                        <View style={[STYLES.w100]}>
                            <TouchableOpacity onPress={onSavePress} style={[STYLES.button, STYLES.buttonBlue, {height: hp(50)}]}>
                                {
                                    loading ?
                                        <ActivityIndicator size="small" color="white" />
                                    :
                                        <Text style={[STYLES.buttonText]}>Save</Text>
                                }

                            </TouchableOpacity>
                        </View>
                    </>
                :
                    <View style={[STYLES.screen, STYLES.flex_center]}>
                        <TouchableOpacity>
                            <Text style={{fontSize: wp(16)}}>Please log in to have access</Text>
                        </TouchableOpacity>

                        <View style={[STYLES.w100, {marginTop: hp(20)}]}>
                            <TouchableOpacity onPress={onLoginPress} style={[STYLES.button, STYLES.buttonBlue, {height: hp(50), paddingHorizontal: wp(25)}]}>
                                <Text style={[STYLES.buttonText]}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }






        </SafeAreaView>
    );
};