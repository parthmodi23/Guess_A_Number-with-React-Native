import React from "react";
import { StyleSheet, TextInput } from "react-native";
import color from "../constant/color";

const Input = props =>{
    return  <TextInput {...props} style={{...styles.Input,...props.style}}/>
    
}

const styles=StyleSheet.create({
Input:{
width:'50%',
borderBottomColor:color.bordercolor,
borderBottomWidth: 1,
marginVertical:10,
// marginTop:30,
textAlign:'center'
}
});

export default Input;