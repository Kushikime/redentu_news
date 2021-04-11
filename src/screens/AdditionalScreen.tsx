import { Form, Input, Item, Label } from 'native-base';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import QRCode from 'react-native-qrcode-svg';
import { hp } from '../Dimensions';
import { STYLES } from '../styles';

export type image = {
    fileName: string,
    uri: string,
    type: string
}



export const AdditionalScreen = ({navigation}:any) => {

    const [loading, setLoading] = useState(false);
    
    const [selectedPhoto, setPhoto] = useState({
        fileName: "test",
        uri: "https://www.film.ru/sites/default/files/filefield_paths/naruto-on-netflix.jpg",
        type: "image/jpeg"
    });
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState('');


    const takePic = async () => {
        setLoading(true);

        await launchCamera({
            mediaType: "photo"
        }, async (e)=>{

            console.log(e);
            setPhoto({
                fileName: e.fileName,
                uri: e.uri,
                type: e.type
            });

            const data = new FormData();
            data.append('filename', selectedPhoto.fileName);
            data.append('image', selectedPhoto.uri);
            data.append('mime', selectedPhoto.type);
    
            
            loadToServer(data);
        });

        




        setLoading(false);
    }

    const loadToServer = async (data:FormData) => {
        await fetch(`https://flutter-test.redentu.com/`, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
                'User-Agent' : 'Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36',
                'Accept' : '*/*',
                'Accept-Encoding' : 'gzip, deflate, br'
            },
            body: data
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
            })
            .catch(e => {
                console.log("ERROR ", e);
            })
    }


    return (
        <SafeAreaView style={[STYLES.screen, {paddingTop: hp(30)}]}>
            <View style={[{minHeight: hp(200)}, STYLES.w100, STYLES.flex_center]}>
                <QRCode
                    value={(code ? code : "some")}
                    logoSize={30}
                    color="black"
                    logoBackgroundColor='transparent'
                />
            </View>
            <Form style={[STYLES.w100]}> 
                <Item error={(codeError? true : false)} floatingLabel style={{marginLeft: 0}}>
                    <Label style={(codeError? STYLES.textRed : STYLES.textGray)}>Code QR value</Label>
                    <Input defaultValue={code} onChangeText={(text)=>{setCode(text)}} style={[STYLES.textInput]} />
                </Item>
                <Text style={[STYLES.errorInput]}>{codeError}</Text>
            </Form>


            <View style={[STYLES.w100]}>
                <TouchableOpacity onPress={takePic} style={[STYLES.button, STYLES.buttonBlue, {height: hp(50)}]}>
                    {
                        loading ?
                            <ActivityIndicator size="small" color="white" />
                        :
                            <Text style={[STYLES.buttonText]}>Upload a photo</Text>
                    }

                </TouchableOpacity>
                
                <View style={[STYLES.w100, {minHeight: hp(200), marginTop: hp(30)}]}>
                <Image source={{uri: selectedPhoto.uri}}  style={[STYLES.w100, {resizeMode: 'contain', height: hp(200)}]} borderRadius={15} />
                    
                </View>
            </View>
        </SafeAreaView>
    );
};