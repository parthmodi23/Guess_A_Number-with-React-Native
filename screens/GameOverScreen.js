import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import color from "../constant/color";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";


const GameOverScreen = props => {
    return (
        <View style={Styles.MainScreen}>
            <BodyText>The Game is over!</BodyText>
            <View style={Styles.imagecontainer}>
                <Image style={Styles.image} source={require('../assets/success.png')} resizeMode='cover' /></View>
            <BodyText style={Styles.Maintext}>You Take <Text style={Styles.innertext}>{props.NumberOfRound}</Text> Round to complete the Game and Your Number was <Text style={Styles.innertext}>{props.SelectedNumber}</Text></BodyText>
            <MainButton onPress={props.StartNew}>Start New Game</MainButton>  
        </View>
    );
}

const Styles = StyleSheet.create({
    MainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagecontainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: 'black',
        borderWidth: 3,
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 200
    },
    Maintext: {
        textAlign: 'center',
        margin:10
    },
    innertext: {
        color: color.primary,
        fontSize:17
    }
});
export default GameOverScreen; 