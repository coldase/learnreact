import React, {useState} from 'react';
import { ImageBackground, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SongList from './SongList';
import ImageList from './ImageList';

let playing = false;

const SongBtn = (props) => {
  
  const [current_color, setColor] = useState(styles.bottomInnerNo);
  const [current_song, setSong] = useState(SongList[props.song_id]);
  
  const PlaySong = async () =>{
    setColor(styles.bottomInnerNo);
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
        setColor(styles.bottomInnerYes)
    }else{
            Audio.setIsEnabledAsync(false);
            playing = false;
        }
  };

    return (
        
        <View style={styles.bottomItem}>
          <TouchableOpacity style={current_color} onPress={PlaySong}>
            <ImageBackground style={styles.image} source={ImageList[props.song_id]}>
              <Text style={styles.buttontext}>{props.song_id+1}</Text>
            </ImageBackground>
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
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      bottomInnerYes:{
        justifyContent: 'center',
        flex:1,
        backgroundColor: "#34e62f",
        borderRadius: 2,
        borderColor: "red",
        borderWidth: 3,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttontext: {
        fontSize: 50,
        textAlign: 'center',
        shadowColor: "#000",
        color: "#fff",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 10,
        textShadowColor: "#000"
      }

});

export default SongBtn;