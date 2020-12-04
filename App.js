import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SongBtn from "./components/SongBtn";
import SongList from './components/SongList';

export default function App(props) {
    const button_list = [];
    
    for(let i=1; i<SongList.length;i++){
      button_list.push(<SongBtn key={i} song_id={i} onPress={() => PlaySong()}/>)
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
