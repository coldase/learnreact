import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SongBtn from "./components/SongBtn.js";


export default function App() {

  const button_list = [];
  const music_list = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15"
  ];

    for(let i=0; i < music_list.length; i++){
      button_list.push(<SongBtn song_id={i} key={i} song_name={`${music_list[i]}`}></SongBtn>);
    };

    return (
    
    <View style={styles.container}>
        <StatusBar/>
        
        <View style={styles.top}>
          <Text style={styles.headertext}>Sävelnappi</Text>
        </View>
        
        <View style={styles.bottom}>
          {button_list}
          
        </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "deepskyblue",
      flex: 1,
    },
    bottom: {
      height: "50%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center",
      padding: 1,
    },
    top:{
      justifyContent: "center",
      height: "17%",
    },
    headertext:{
      paddingTop: "5%",
      fontWeight: "bold",
      fontSize: 50,
      textAlign: 'center',
      shadowColor: "#000",
      color: "#fff",
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10,
      textShadowColor: "#000"
    }       
  });
