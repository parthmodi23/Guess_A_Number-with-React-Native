import React from "react";
import { View,StyleSheet } from "react-native";
import color from "../constant/color";

const Card = props=>{
    return <View style={{...styles.card,...props.style}}>{props.children}</View>
}

const styles=StyleSheet.create({

    card:{
        elevation:10,
        shadowColor:color.bordercolor,
        shadowOffset:{width:0,height:2},
        shadowRadius:0,
        shadowOpacity:0.26,
        backgroundColor:color.white,
        borderRadius:10
    }

});

export default Card;