import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import PlaySong from './PlaySong';


const SongBtn = (props) => { 
    
    const [current_color, setColor] = useState(styles.bottomInnerNo);

    const change_color = () => {
      PlaySong();
      if (current_color === styles.bottomInnerYes){
        setColor(styles.bottomInnerNo);
      }else{
        setColor(styles.bottomInnerYes)
      }
    };

    return (
        
        <View style={styles.bottomItem}>
          <TouchableOpacity style={current_color} onPress={change_color}>
            <Text style={styles.buttontext}>{props.song_name}</Text>
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