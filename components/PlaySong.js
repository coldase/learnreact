import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

let playing = false;

async function play(){
    
    const soundObject = new Audio.Sound();
    
    try {
        Audio.setIsEnabledAsync(true);
        await soundObject.loadAsync(require(`../assets/sounds/1.mp3`));
        await soundObject.playAsync();
      }
      catch (error){
        console.log(error);
      }
    };
    
const PlaySong = () => {
    if (!playing){
        play();
        playing = true;
    }else{
        Audio.setIsEnabledAsync(false);
        playing = false;
    }
};

export default PlaySong;