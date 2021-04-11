import React from 'react';
import {
    Image,
    SafeAreaView,
    Text
} from 'react-native';
import { hp, wp } from '../Dimensions';
import { STYLES } from '../styles';





export const SplashScreen = () => {

    return (
        <SafeAreaView style={[STYLES.flex_center, STYLES.screen]}>
            <Image style={{maxWidth: wp(150), resizeMode: 'contain'}} source={require("../assets/splash.png")} />
        </SafeAreaView>
    );
};
