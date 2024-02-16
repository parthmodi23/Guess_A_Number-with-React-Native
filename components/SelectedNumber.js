import React from "react";
import color from "../constant/color";
import {View,Text,StyleSheet} from  'react-native';
const SelectedNumber=(props)=>{
    return(
            <View style={Styles.NumberOuterBox}>
                <Text>{console.log(props)}</Text>
                <Text style={Styles.number}>{props.children}</Text>
            </View>
    )
}

const Styles=StyleSheet.create({

    NumberOuterBox:{
        // fontSize:5,
        color:color.success,
        borderWidth:2,
        borderColor:color.success,
        marginVertical:10,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',

    },
    number:{
        fontSize:30,
        color:color.success,
        padding:10,
        marginVertical:0,
        marginHorizontal:25,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'

    }

});

export default SelectedNumber;