import React, { useState } from 'react'
import { Text, Image, View } from 'react-native'
import { AntDesign  , Entypo, Ionicons  } from '@expo/vector-icons';

import styles from './styles'

// import { Song } from '../../types'

// export type PlayerWidgetProps = { PlayerWidgetProps
//     song: Song;
// }

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
  }

const PlayerWidget = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    function play(){
        if(isPlaying){
            setIsPlaying(false)
        } else {
            setIsPlaying(true)
        }
    }

    function favorite(){
        if(isFavorite){
            setIsFavorite(false)
        } else {
            setIsFavorite(true)
        }
    }

    return(
        <View style={styles.container}>
            <Image source={{uri: song.imageUri}} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.contentIcons}>
                {isFavorite ? (<AntDesign name="heart" size={26} color="#1ed760" style={styles.icon} onPress={favorite} />) : (<AntDesign name="hearto" size={26} color="white" style={styles.icon} onPress={favorite} />)}
                {isPlaying ? (<Ionicons name="pause" size={36} color="white" style={styles.icon} onPress={play} />) : (<Entypo name="controller-play" size={36} color="white" style={styles.icon} onPress={play} />)}
            </View>
        </View>
    )
} 

export default PlayerWidget