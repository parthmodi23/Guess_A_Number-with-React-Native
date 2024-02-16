import React, { useRef, useState } from "react";
import Card from "../components/Card";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import SelectedNumber from "../components/SelectedNumber";


const GenerateRandomNumber = (Min, Max, exclude) => {
    Min = Math.ceil(Min);
    Max = Math.floor(Max);

    const randomnumber = Math.floor(Math.random() * (Max - Min)) + Min;

    if (randomnumber === exclude) {
        return GenerateRandomNumber(Min, Max, exclude);

    } else {
        return randomnumber;

    }
    console.log(randomnumber, exclude)
};
const GameScreen = (props) => {

    const [currentGuess, SetCurrentGuess] = useState(GenerateRandomNumber(1, 100, props.userChoice))

    const currentLow=useRef(1);
    const currentHigh=useRef(100);
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
    }
    return (
        <View>
            <Text>Opponent's Guess</Text>
            <SelectedNumber>{currentGuess}</SelectedNumber>
            <Card style={styles.buttoncontainer}>
                <View style={styles.innerbutton}><Button title="LOWER" onPress={() => {return nextGuessHandler('lower') }} /></View>
                <View style={styles.innerbutton}><Button title="GREATER" onPress={() => {return nextGuessHandler('Greater') }} /></View>

            </Card>
        </View>
    )

}

const styles = StyleSheet.create({

    buttoncontainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center',
        width: '80%'
    },
    innerbutton: {
        width: '40%'
    }

})

export default GameScreen;