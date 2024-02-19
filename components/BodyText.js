import React from "react";
import { Text, StyleSheet, View } from "react-native";


const BodyText=(props)=>{
    return <Text style={{...styles.font,...props.style}}>{props.children}</Text>
}

const  styles=StyleSheet.create({
    font:{
        fontFamily:'open-sans-bold',
    }
    
})

export default BodyText;