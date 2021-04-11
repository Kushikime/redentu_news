import { StyleSheet } from "react-native";
import { hp, wp } from "./Dimensions";

export const STYLES = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: wp(20),
        alignItems: 'center'
    },
    textGray: {
        color: "rgba(0,0,0,0.6)"
    },
    textRed: {
        color: 'red'
    },
    NewsCard: {
        height: hp(200),
        maxHeight: hp(200),
        marginVertical: hp(30),
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.4)',
        elevation: 15,
        marginHorizontal: wp(15),
        borderRadius: 15
    },
    cardTitle: {
        color: 'white',
        fontSize: wp(20),
        fontWeight: 'bold'
    },
    cardAuthor: {

    },
    cardDate: {

    },
    defaultBG: {
        width: '100%',
        height:  "100%",
        borderRadius: 15,
    },












    //BUTTONS
    drawerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(10)
    },
    drawerButtonIcon: {
        maxHeight: hp(28),
        maxWidth: wp(28),
        resizeMode: 'contain',
        paddingHorizontal: wp(30)
    },
    drawerItemText: {
        fontSize: wp(16),
        marginLeft: wp(3)
    },
    textInput:{
        height: hp(60),
        marginLeft: 0,
    },
    errorInput: {
        marginTop: hp(5),
        fontSize: wp(14),
        color: 'red',
        marginBottom: hp(20)
    },
    button:{
        width: '100%',
        paddingVertical: hp(10),
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: hp(5)
    },
    buttonBlue: {
        backgroundColor: '#0d80a5'
    },
    buttonText:{
        color: 'white',
        fontSize: wp(20)
    },
    underlined: {
        textDecorationLine: 'underline'
    },
    smallText: {
        fontSize: wp(14)
    },
    ta_c:{
        textAlign: 'center'
    },










    ///LAYOUT
    w100: {
        width: '100%'
    },
    h100: {
        height: '100%'
    },
    fd_r: {
        flexDirection: 'row'
    },
    fd_c: {
        flexDirection: 'column'
    },
    jc_c: {
        justifyContent: 'center'
    },
    jc_fs: {
        justifyContent: 'flex-start'
    },
    jc_fe: {
        justifyContent: 'flex-end'
    },
    jc_sp: {
        justifyContent: 'space-between'
    },
    ai_c: {
        alignItems: 'center'
    },
    ai_fs: {
        alignItems: 'flex-start'
    },
    ai_fe: {
        alignItems: 'flex-end'
    },
    flex_center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});