import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import screenSize from '../../../utils/utils';
import { styles } from './Today';


const scale= screenSize().fontScale

export const Yesterday = () => {
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

    const scale= screenSize().fontScale
    const { completed,timeOfDay, currentHour } = getTimeOfDay();

function calCulateTimePercentage(){
    const { timeOfDay, currentHour } = getTimeOfDay();

    
    console.log("currentHour before",currentHour);
    
    console.log("currentHour after",currentHour*60);
    
    const neededTime=8*60
    const time=neededTime-currentHour*60
    
    
    const timePassedPercentage=time/neededTime*100
    return {time,timePassedPercentage,currentHour}
    }
    const {time,timePassedPercentage} = calCulateTimePercentage();

    console.log(timePassedPercentage,"time")

    const Complete = () => {
    return (
            <View style={styles.itinerarycontainer}>
                <View style={[styles.completedTime,{height:scale*100}]}>
                </View>
            </View>
    )
    }

    const PartiallyComplete = () => {
    return (

        <View style={styles.itinerarycontainer}>
            <View>
                <View style={[styles.completedTime,{height:calCulateTimePercentage().timePassedPercentage*scale,}]}>           
                </View>
                <View style={[styles.incompleteTime,{height:(scale*100)-calCulateTimePercentage().timePassedPercentage,}]}>
                </View>
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

  return (
        <View style={styles.container}> 
        <View style={styles.timeView}>
            <Text style={styles.time}>00.00</Text>
             <Text style={styles.time}>08.00</Text>
             <Text style={styles.time}>16.00</Text>
            {
                timePassedPercentage>=99.75?
                <Text style={styles.time}>23.59</Text>:
                <Text style={styles.time}>23.59</Text>
            }
        </View>
        <View style={styles.barContainer}>
                                <View>
                                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                                    <Complete/>
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")}style={styles.filledImage}/>
                                    <Complete />
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                                    <Complete/>
                                        <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                                    </View>
                                </View>
        </View>  
        <View style={styles.weatherContainer}>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Maldives</Text>
                    <Text>Save the Turtles</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Moon_cloud_fasr_wind1.png")}/>
                </View>
            </View>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Golden beach</Text>
                    <Text>Surfing on the sea</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Cloud_zap_thunder2.png")}/>
                </View>
            </View>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Coconut grove</Text>
                    <Text>BBQ party by the sea</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Moon_fast_wind3.png")}/>
                </View>
            </View>
            <View style={styles.weather}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Maldives Islands</Text>
                    <Text>Sea blowing</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Sun_cloud_angled_rain4.png")}/>
                </View>
            </View>
        </View>
        </View>     
  )
}

export default Yesterday


