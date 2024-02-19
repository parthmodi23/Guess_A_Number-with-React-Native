import React from "react";
import { TouchableOpacity, View ,StyleSheet,Text} from "react-native";
import color from "../constant/color";

const MainButton=props=>{
    return(

<TouchableOpacity onPress={props.onPress} style={props.color}>
        <View style={{...Styles.mainbutton,...props.style}}>
            <Text style={Styles.buttontext}>{props.children}</Text>
        </View>
</TouchableOpacity>
    )
}

const Styles=StyleSheet.create({

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