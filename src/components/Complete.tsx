import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../screens/Guide/Tabs/Today'
import screenSize from '../utils/utils'


const scale= screenSize().fontScale
function getTimeOfDay() {
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  if (currentHour >= 0 && currentHour < 8) {
    const timeRemaining = (8 - currentHour - currentMinutes / 60).toFixed(2);
    return {
      completed: [{ morning: true, evening: false, night: false }],
      timeOfDay: 'Morning',
      currentHour: parseFloat(timeRemaining),
    };
  } else if (currentHour >= 8 && currentHour < 16) {
    const timeRemaining = (16 - currentHour - currentMinutes / 60).toFixed(2);
    return {
      completed: [{ morning: false, evening: true, night: false }],
      timeOfDay: 'Afternoon',
      currentHour: parseFloat(timeRemaining),
    };
  } else {
    const timeRemaining = (24 - currentHour - currentMinutes / 60).toFixed(2);
    return {
      completed: [{ morning: false, evening: false, night: true }],
      timeOfDay: 'Night',
      currentHour: parseFloat(timeRemaining),
    };
  }
}

function calCulateTimePercentage(){
    const { timeOfDay, currentHour } = getTimeOfDay();

    
    console.log("currentHour before",currentHour);
    
    console.log("currentHour after",currentHour*60);
    
    const neededTime=8*60
    const time=neededTime-currentHour*60
    
    
    const timePassedPercentage=time/neededTime*100
    return {time,timePassedPercentage,currentHour}
    }


export const Complete = () => {
    return (
            <View style={styles.itinerarycontainer}>
                <View style={[styles.completedTime,{height:scale*100}]}>
                </View>
            </View>
    )
}


const InComplete = () => {
    return (
        <View style={styles.itinerarycontainer}>
            <View>
            <View style={[styles.incompleteTime,{height:scale*100}]}>         
            </View>
            </View>
        </View>
    )
}