import React from "react";
import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions,SafeAreaView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import color from "../constant/color";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";


const GameOverScreen = props => {
    return (
        <ScrollView>
        <View style={Styles.MainScreen}>
            <BodyText>The Game is over!</BodyText>
            <View style={Styles.imagecontainer}>
                <Image style={Styles.image} source={require('../assets/success.png')} resizeMode='cover' /></View>
            <BodyText style={Styles.Maintext}>You Take <Text style={Styles.innertext}>{props.NumberOfRound}</Text> Round to complete the Game and Your Number was <Text style={Styles.innertext}>{props.SelectedNumber}</Text></BodyText>
            <MainButton onPress={props.StartNew}>Start New Game</MainButton>  
        </View>
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    MainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:10,
    },
    imagecontainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: (Dimensions.get('window').width*0.7)/2,
        borderColor: 'black',
        borderWidth: 3,
        overflow:'hidden',
        marginVertical: Dimensions.get('window').height/30,
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