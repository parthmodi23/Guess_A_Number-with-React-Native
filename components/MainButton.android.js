import React from "react";
import { TouchableOpacity, View ,StyleSheet,Text,TouchableNativeFeedback, Platform} from "react-native";
import color from "../constant/color";

const MainButton=props=>{

    let ButtonComponent=TouchableOpacity;

        if(Platform.Version>=21){
            ButtonComponent=TouchableNativeFeedback
        }
    return(
    <View style={Styles.buttonContainer}>
        <ButtonComponent onPress={props.onPress} style={props.color}>
        <View style={{...Styles.mainbutton,...props.style}}>
            <Text style={Styles.buttontext}>{props.children}</Text>
        </View>
</ButtonComponent>
</View>  
    )
}

const Styles=StyleSheet.create({
//remove this buttoncontainer and you will get the real rippel effect 
    buttonContainer:{
        borderRadius:25,
        overflow:'hidden'
    },

    mainbutton:{
        width:'100%',
        height:37,
        textAlign:'center',
        justifyContent:"center",
        color:color.primary,
        backgroundColor:color.primary,
        borderRadius:25,
    },
    buttontext:{
        fontSize:14,
        color:'white',
        marginHorizontal:15,
        justifyContent:'center',
        textAlign:'center',
    }


});


export default MainButton;