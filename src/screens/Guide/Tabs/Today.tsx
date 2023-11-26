import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import screenSize from '../../../utils/utils';

const Today = () => {


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

console.log(screenSize().fontScale,"fontSCale")

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
                <View style={[styles.completedTime,{height:100}]}>
                </View>
            </View>
    )
    }

    const PartiallyComplete = () => {
    return (

        <View style={styles.itinerarycontainer}>
            <View>
                <View style={[styles.completedTime,{height:calCulateTimePercentage().timePassedPercentage*screenSize().fontScale,}]}>
                        
                </View>
                <View style={[styles.incompleteTime,{height:screenSize().fontScale*100-calCulateTimePercentage().timePassedPercentage,}]}>
                </View>
            </View>
        </View>
    )
    }


    const InComplete = () => {
    return (
        <View style={styles.itinerarycontainer}>
            <View>
            <View style={[styles.incompleteTime,{height:100,}]}>         
            </View>
            </View>
        </View>
    )
    }

  return (
        <View style={styles.container}> 

        <View style={[styles.timeView,{height:500,backgroundColor:"red",display:"flex",flexDirection:"column",}]}>
            <Text style={styles.time}>0.00</Text>
             <Text style={styles.time}>08.00</Text>
             <Text style={styles.time}>16.00</Text>
             
            {
                timePassedPercentage>=99.75?
                <Text style={styles.time}>24.00</Text>:
                <Text style={styles.time}>24.00</Text>
            }
        </View>
        <View>
            {
                completed.map((data,index)=>{
                    return(
                        <View>
                            {
                                data?.morning ?
                                <View > 
                                    <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <PartiallyComplete/>
                                    <View style={styles.circle}/>
                                    <InComplete />
                                     <View style={styles.circle}/>
                                    <InComplete/>
                                     <View style={styles.circle}/>
                                    </View>

                                </View>:
                                <View>
                                    {data.evening?
                                <View>
                                    <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <Complete/>
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <PartiallyComplete />
                                     <View style={styles.circle}/>
                                    <InComplete/>
                                     <View style={styles.circle}/>
                                    </View>
                                </View>  :
                                <View>
                                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <Complete/>
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <Complete />
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <PartiallyComplete/>
                                    {
                                        timePassedPercentage>=99.75?
                                        // this is an edge case for time greater than 23.59
                                        <Image source={require("./../../../../assets/Itinenery/filled.png")}/>:
                                        <View style={styles.circle}/>
                                    }
                                     
                                    </View>
                                </View>  
                                }
                                </View>
                            }   
                        </View>
                    )
                })
            }
        </View>  
        <View style={{width:"80%",height:500,backgroundColor:"red"}}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",height:120}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Maldives</Text>
                    <Text>Save the Turtles</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Moon_cloud_fasr_wind1.png")}/>
                </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",height:120}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Golden beach</Text>
                    <Text>Surfing on the sea</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Cloud_zap_thunder2.png")}/>
                </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",height:120}}>
                <View style={{display:"flex",flexDirection:"column"}}>
                    <Text style={styles.titleText}>Coconut grove</Text>
                    <Text>BBQ party by the sea</Text>
                </View>
                <View style={{height:50,width:50,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:50}}>
                <Image source={require("./../../../../assets/Itinenery/Moon_fast_wind3.png")}/>
                </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",height:120}}>
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

export default Today


const styles = StyleSheet.create({
   container:{
    height:screenSize().screenHeight,
    margin:screenSize().screenScale*10,
    display:"flex",
    flexDirection:"row",
   }, 

   timeView:{
    marginRight:14
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
  },
  circle:{
    width:22,
    height:22,
    borderWidth:2,
    borderColor:"#C4C4C4",
    borderRadius:50
  },
  completedTime:{
    backgroundColor:"#0373F3",
    width:3,
  },
  incompleteTime:{
    backgroundColor:"#C4C4C4",
    width:3,
  },
  titleText:{
    fontWeight:"600",
    fontSize:16,
    color:'#000000'
  },
  subText:{
    color:"#B1B1B1",
    fontWeight:"600",
    fontSize:16,
  },
  weatherIcon:{
    height:50,width:50,
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50
  },
  time:{
    fontWeight:"400",
    fontSize:16,
    height:125

  }
});