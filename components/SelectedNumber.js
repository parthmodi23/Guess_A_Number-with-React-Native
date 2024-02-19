import React from "react";
import color from "../constant/color";
import {View,Text,StyleSheet} from  'react-native';
const SelectedNumber=(props)=>{
    return(
            <View style={{...Styles.NumberOuterBox,...props.style}}>
                <Text>{console.log(props)}</Text>
                <Text style={{...Styles.number,...props.style}}>{props.children}</Text>
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
        alignItems:'center',

    },
    number:{
        fontSize:30,
        color:color.success,
        // padding:10,
        marginHorizontal:20,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20

    }

});

export default SelectedNumber;