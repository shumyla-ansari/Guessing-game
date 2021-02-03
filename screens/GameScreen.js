import React, {useState, useRef} from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min =Math.ceil(min);
    max= Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.userChoice));

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice )){
            Alert.alert('Don\'t lie!', 'you know that is wrong...', [{
            text: 'Sorry', style: 'cancel'    
            }]);
            return;

            if (diection === 'lower') {
                generateRandomBetween()
            }
        }





    }
    return (
        <View style={styles.screen}>
            <Text>Opponents' Guess </Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card stylle={styles.buttonContainer} >
                <Button title="LOWER" onPress={() => nextGuessHandler('lower')}/>
                <Button title="GREATER" onPress={()=> nextGuessHandler('greater')}/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center', 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})
