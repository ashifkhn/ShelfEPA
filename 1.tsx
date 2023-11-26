import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import screenSize from '../../../utils/utils';

const Today = () => {

function getTimeOfDay() {
//   const currentHour = new Date().getHours();
  const currentHour =13
  const currentMinutes = new Date().getMinutes();
//   const currentMinutes = 0


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
                <View style={{backgroundColor:"skyblue",height:100,width:20}}>
                </View>
                {/* <View style={styles.textAndImage}>
                <View>
                <Text>
                    Maldives
                </Text>
                <Text>Save the Turtles</Text>
                </View>
                <Image source={require("./../../../../assets/Itinenery/Moon_fast_wind.png")}
                style={styles.itineraryImage}
                />

                </View> */}
            </View>
    )
    }

    const PartiallyComplete = () => {
    return (

        <View style={styles.itinerarycontainer}>
            <View>
                <View style={{backgroundColor:"skyblue",height:calCulateTimePercentage().timePassedPercentage,width:20}}>
                        <Text>Compl</Text>
                </View>
                <View style={{backgroundColor:"yellow",height:100-calCulateTimePercentage().timePassedPercentage,width:20}}>
                    <Text>
                        Rem
                    </Text>
                </View>
            </View>
            {/* <View style={styles.textAndImage}>
                <View>
                <Text>
                    Maldives
                </Text>
                <Text>Save the Turtles</Text>
                </View>
                <Image source={require("./../../../../assets/Itinenery/Moon_fast_wind.png")}
                style={styles.itineraryImage}
                />

            </View> */}
        </View>

        // <View>
        //     <View style={{backgroundColor:"skyblue",height:calCulateTimePercentage().timePassedPercentage,width:20}}>
        //             <Text>Compl</Text>
        //     </View>
        //     <View style={{backgroundColor:"yellow",height:100-calCulateTimePercentage().timePassedPercentage,width:20}}>
        //         <Text>
        //             Rem
        //         </Text>
        //     </View>
        // </View>
    )
    }


    const InComplete = () => {
    return (
        <View style={styles.itinerarycontainer}>
            <View>
            <View style={{backgroundColor:"red",height:100,width:20}}>
                <Text>night</Text>
                
            </View>
            {/* <View style={styles.textAndImage}>
                <View>
                <Text>
                    Maldives
                </Text>
                <Text>Save the Turtles</Text>
                </View>
                <Image source={require("./../../../../assets/Itinenery/Moon_fast_wind.png")}
                style={styles.itineraryImage}
                />
                </View> */}
            </View>
        </View>
    )
    }

  return (
        <View style={styles.container}> 
        <View>
            <Text>
                test
            </Text>
        </View>
            {
                completed.map((data,index)=>{
                    return(
                        <View>
                            {
                                data?.morning ?
                                <View>
                                    <PartiallyComplete/>
                                    <Text>....</Text>
                                    <InComplete />
                                    <Text>....</Text>
                                    <InComplete/>

                                </View>:
                                <View>
                                    {data.evening?
                                <View>
                                    <Complete />
                                    <Text>....</Text>
                                    <PartiallyComplete/>
                                    <Text>....</Text>
                                    <InComplete/>
                                </View>  :
                                <View>
                                    <Complete />
                                    <Text>....</Text>
                                    <Complete/>
                                    <Text>....</Text>
                                    <PartiallyComplete/>
                                </View>  
                                }
                                </View>
                            }   
                        </View>
                    )
                })
            }
        </View>
  )
}

export default Today


const styles = StyleSheet.create({
   container:{
    height:screenSize().screenHeight,
    margin:screenSize().screenScale*10,
    display:"flex",
    flexDirection:"row-reverse"
   }, 
   
  itinerarycontainer: {
    display:"flex",
    flexDirection:"row"
  },
  timeContainer:{
    backgroundColor:"blue",
    height:screenSize().screenHeight/2,
    width:"30%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  verticalLine:{
    width:5,
    backgroundColor:"white"
  },
  weather:{
    height:screenSize().screenHeight/2,
    width:"70%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"green"
  },
  itineraryImage:{
    height:50,
    width:50,
  },
  textAndImage:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  }
});