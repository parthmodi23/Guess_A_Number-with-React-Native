import React from "react";
import { StyleSheet, View } from "react-native";


const GameOverScreen=props =>{
    return(
        <View style={Styles.MainScreen}>
            <Text>The Game is over!</Text>
        </View>
    );
}

const Styles=StyleSheet.create({
    MainScreen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default GameOverScreen; 