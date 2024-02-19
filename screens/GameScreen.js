import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import SelectedNumber from "../components/SelectedNumber";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";


const GenerateRandomNumber = (Min, Max, exclude) => {
    Min = Math.ceil(Min);
    Max = Math.floor(Max);

    const randomnumber = Math.floor(Math.random() * (Max - Min)) + Min;

    if (randomnumber === exclude) {
        return GenerateRandomNumber(Min, Max, exclude);

    } else {
        return randomnumber;

    }
};
const GameScreen = (props) => {

    const [currentGuess, SetCurrentGuess] = useState(GenerateRandomNumber(1, 100, props.userChoice))
    const [totalround,SetTotalRound]=useState(0)
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
//object destructuring
    const {userChoice,onGameOVer }=props;

    useEffect(()=>{

        if(currentGuess===userChoice){
           props.onGameOver(totalround)
        }

    },[currentGuess,userChoice,onGameOVer]);

    const nextGuessHandler=direction=>{
        if((direction=='lower' && currentGuess<props.userChoice) || (direction=='Greater' && currentGuess>props.userChoice)){
            Alert.alert("Dont lie!","You Know that this is wrong",[{text:'Sorry!',style:'cancel'}]);
            return;
        }
        if(direction==='lower'){
            currentHigh.current=currentGuess;
            
        }else{
            currentLow.current=currentGuess
        }
       const nextNumber = GenerateRandomNumber(currentLow.current,currentHigh.current,currentGuess);
       SetCurrentGuess(nextNumber)
       SetTotalRound(totalround+1)
    }
    return (
        <View>
            <TitleText style={styles.text}>Opponent's Guess</TitleText>
            <SelectedNumber style={styles.numberstyling}>{currentGuess}</SelectedNumber>
            <Card style={styles.buttoncontainer}>
                <View style={styles.innerbutton}><MainButton onPress={() => {return nextGuessHandler('lower') }}>LOWER</MainButton></View>
                <View style={styles.innerbutton}><MainButton onPress={() => {return nextGuessHandler('Greater') }} >GREATER</MainButton></View>

            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        marginVertical:20
    },

    buttoncontainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        width: '80%',
        margin:30,
        padding:10
    },
    // numberstyling:{
    //     textAlign:'center',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     // width:90,
    //     margin:130,
    //     fontSize:33
    // },
    innerbutton: {
        justifyContent:'center',
        textAlign:'center',
        width: '40%'
    }

})

export default GameScreen;