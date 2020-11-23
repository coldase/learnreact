import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const SongBtn = (props) => {
    
    const music_list = [
        "Song1",
        "Song2",
        "Song3",
        "Song4",
        "Song5",
        "Song6",
        "Song7",
        "Song8",
        "Song9",
        "Song10",
        "Song11",
        "Song12",
        "Song13",
        "Song14",
        "Song15"
    ]

    return (
        
        <View style={styles.bottomItem}>
          <TouchableOpacity style={styles.bottomInner} onPress={()=>{console.log(props.song_name)}}>
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
      bottomInner:{
        justifyContent: 'center',
        flex:1,
        backgroundColor: '#fff',
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