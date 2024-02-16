import React, { useState } from "react";
import { View,
     Text, 
     StyleSheet,
      Button ,
      TouchableWithoutFeedback,
      Keyboard,
      Alert
    } from "react-native";
import Card from "../components/Card";
import color from "../constant/color";
import Input from "../components/Input";
import SelectedNumber from "../components/SelectedNumber";
const StartGameScreen = (props) => {

//This is basically check whether input is interger or not if not then user cant enter that number
    const [enterdnumber,SetEnterdNumber]=useState('')
    const [Confirm,SetConfirm]= useState(false)
    const [selectednumber,SetSelectedNumber]=useState()

    const handleInput=inputnumber=>{
        SetEnterdNumber(inputnumber.replace(/[^0-9]/g,''));
    };

    const handleResetbutton=()=>{
        SetEnterdNumber('')
    }

    const handleConfirmbutton=()=>{
        const choosenNumber=parseInt(enterdnumber)
        if(isNaN(choosenNumber)||choosenNumber<=0||choosenNumber>99){
            Alert.alert("Invalid Input","Please Enter Number Between 0 to 100",
            [{text:'Okay',style:'destructive',onPress:handleResetbutton}])
           return; 
        }
        SetConfirm(true)
        SetSelectedNumber(choosenNumber)
        SetEnterdNumber('')
    }

    let confirmedOutput;
    if(Confirm){
        // confirmedOutput=Alert.alert('Confirmed!',"Your selected Number is : "+selectednumber+"",
        // [{text:'Okay',style:'destructive',onPress:SetConfirm(false)}])
         confirmedOutput=
         <Card style={Styles.summurycontainer}>
            <Text style={Styles.textcss}>Selected number is</Text>
            <SelectedNumber>{selectednumber}</SelectedNumber>
            <Button title="Start The Game" onPress={()=>props.onStartGame(selectednumber)}/>
         </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={Styles.Screen}>
            <View>
                <Text style={Styles.DefaultText}>Start The Game!</Text>
            </View>
            <Card style={Styles.InputContainer}>
                     <Input placeholder='Enter the Number' 
                     keyboardType='numeric' 
                     maxLength={2}
                     onChangeText={handleInput}
                     value={enterdnumber}
                     />
                <View style={Styles.ButtonContainer}>
                    <View style={Styles.InnerButton}>
                        <Button title="Reset" color={color.info} onPress={handleResetbutton} /></View>
                    <View style={Styles.InnerButton}>
                        <Button title="Confirm"color={color.success} onPress={handleConfirmbutton} />
                    </View>
                </View>
            </Card>   
            {confirmedOutput}     
        </View>
        </TouchableWithoutFeedback>
    );
}


const Styles = StyleSheet.create({
    Screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    DefaultText: {
        fontSize: 20,
        marginVertical: 15,
    },
    InputContainer: {
        width: 400,
        height: 150,
        maxHeight: '40%',
        maxWidth: '90%',
        justifyContent: 'center',
        alignItems: 'center',
// this css is comming from the card component
        // elevation: 10,
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 0,
        // shadowOpacity: 0.26,
        // backgroundColor: 'white',
        // borderRadius: 10

    },
  
    ButtonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    InnerButton: {
        width: '35%'
    },
    summurycontainer:{
        marginVertical:20,
        alignItems:'center',
        padding:20
    },
    textcss:{
        fontSize:20,
    }

});

export default StartGameScreen; 