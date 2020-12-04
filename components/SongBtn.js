import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SongList from './SongList';

let playing = false;

const SongBtn = (props) => {
  
  const [current_color, setColor] = useState(styles.bottomInnerNo);
  const [current_song, setSong] = useState(SongList[props.song_id]);
  
  const PlaySong = async () =>{
    if (!playing){
        const soundObject = new Audio.Sound();
        try {
            Audio.setIsEnabledAsync(true);
            await soundObject.loadAsync(current_song);
            await soundObject.playAsync();
        }
        catch (error){
            console.log(error);
        }
        playing = true;
    }else{
            Audio.setIsEnabledAsync(false);
            playing = false;
        }
};

    const change_color = () => {
      if (current_color === styles.bottomInnerYes){
        setColor(styles.bottomInnerNo);
      }else{
        setColor(styles.bottomInnerYes)
      }
    };

    const onButtonClick = () => {
      change_color();
      PlaySong();
      console.log(props);
    };

    return (
        
        <View style={styles.bottomItem}>
          <TouchableOpacity style={current_color} onPress={onButtonClick}>
            <Text style={styles.buttontext}>{props.song_id}</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomItem: {
        width: '33%',
        height: '33%',
        padding: 5,    
      },
      bottomInnerNo:{
        justifyContent: 'center',
        flex:1,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      bottomInnerYes:{
        justifyContent: 'center',
        flex:1,
        backgroundColor: "#34e62f",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttontext: {
        fontSize: 20,
        textAlign: 'center'
      }

});

export default SongBtn;