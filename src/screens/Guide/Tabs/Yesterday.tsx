import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import screenSize from '../../../utils/utils';

export const Yesterday = () => {

  

  return (
    <View style={styles.container}>
        <View style={styles.timeContainer}>
            <View>
                   <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",height:"25%",alignItems:"center"}}>
                        <Text>Time</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",height:"25%",alignItems:"center"}}>
                        <Text>Time</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",height:"25%",alignItems:"center"}}>
                        <Text>Time</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",height:"25%",alignItems:"center"}}>
                        <Text>Time</Text>
                    </View>
            </View>
            <View style={styles.verticalLine}/>
        </View>
        <View style={styles.weather}>
            <View>
                <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",width:"90%",height:"25%",alignItems:"center"}}>
                    <Text>Maldives</Text>
                    <Text>Image</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",width:"90%",height:"25%",alignItems:"center"}}>
                    <Text>Maldives</Text>
                    <Text>Image</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",width:"90%",height:"25%",alignItems:"center"}}>
                    <Text>Maldives</Text>
                    <Text>Image</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row", justifyContent:"space-around",width:"90%",height:"25%",alignItems:"center"}}>
                    <Text>Maldives</Text>
                    <Text>Image</Text>
                </View>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:"red",
    margin:20,
    height:screenSize().screenHeight/2,
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
    // height:"100%",
    backgroundColor:"white"
  },
  weather:{
    // backgroundColor:"blue",
    height:screenSize().screenHeight/2,
    width:"70%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"green"
  }
});
