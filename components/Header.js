import React from 'react'
import { StyleSheet, View,Text } from 'react-native';
import color from '../constant/color';

const Header = (props) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );
}

const styles=StyleSheet.create({

    header:{
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