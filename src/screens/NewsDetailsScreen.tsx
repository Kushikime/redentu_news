import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import WebView from 'react-native-webview';
import { useSelector } from 'react-redux';
import { hp, wp } from '../Dimensions';
import { STYLES } from './../styles';





export const NewsDetailsScreen = ({navigation}:any) => {

    const [loading, setLoading] = useState(true);



    const url = useSelector(state => state.user.selectedUrl);

    const goBack = () => {
        navigation.goBack();
    }


    return (
        <View style={[STYLES.w100, STYLES.h100]}>
            <View style={[STYLES.w100, STYLES.jc_sp, STYLES.ai_c, STYLES.fd_r, {height: hp(80), backgroundColor: 'white'}]}>
                <TouchableOpacity onPress={goBack} style={[STYLES.flex_center, STYLES.h100, {width: wp(80)}]}>
                    <Image source={require('../assets/icons/back.png')} style={[{resizeMode: 'contain', height: hp(25)}]} />
                </TouchableOpacity>

                <Image source={require('../assets/logo.png')} style={[{resizeMode: 'contain', height: hp(50)}]} />


                <View  style={[STYLES.flex_center, STYLES.h100, {width: wp(80)}]}></View>
            </View>

            {
                loading ?
                    <View style={[STYLES.screen, STYLES.flex_center, {position: 'absolute', top: 0, left: 0, zIndex: 10, height: '100%', width: '100%'}]}>
                        <ActivityIndicator size="large" color={"#0d80a5"} />
                    </View>
                :
                    <></>
            }

            <WebView onLoadEnd={()=>{setLoading(false)}} allowsBackForwardNavigationGestures={false} source={{uri: url}} style={[STYLES.w100, STYLES.ai_c, {opacity: (loading ? 0 : 1)}]} />
        </View>
    );
};
