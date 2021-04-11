import { Icon, Input, Item, View } from 'native-base';
import React, { useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { hp, wp } from '../Dimensions';
import { STYLES } from '../styles';





export const NewsCard = (props:{title: string, date: string, author: string, image?: string, onPress: ()=> void}) => {
    return (
        <View style={[STYLES.NewsCard]}>
            <TouchableOpacity style={{height: '100%'}} onPress={props.onPress}>
                <ImageBackground source={props.image?{uri: props.image}:require('../assets/defaultBG.jpg')} style={STYLES.defaultBG} borderRadius={15}>
                    <View style={[{flex: 1, borderRadius: 15, height: '100%', paddingHorizontal: wp(20),backgroundColor: 'rgba(0,0,0,0.5)', paddingVertical: hp(20)}, STYLES.fd_c]}>
                        <View style={{width:"100%", height: '100%'}}>
                            <Text style={[STYLES.cardTitle]}>{props.title}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};