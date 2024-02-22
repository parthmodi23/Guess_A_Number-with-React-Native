import React from 'react'
import { StyleSheet, View,Text, Platform, ToastAndroid } from 'react-native';
import color from '../constant/color';
import TitleText from './TitleText';
const Header = (props) =>{
    return(
        <View style={{...styles.header,...Platform.select(
            {ios:styles.headerIos,android:styles.headerAndroid})}}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>

    );
}

const styles=StyleSheet.create({

    headerIos:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'lightgreen',
        alignItems:'center',
        justifyContent:'center',
    },
    
    headerAndroid:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:color.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:color.bordercolor,
        fontSize:18,

    },

});

export default Header;