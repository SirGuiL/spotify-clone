import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native'

import { AlbumGlobalProps } from '../../types'

import styles from './styles'

export type AlbumProps = {
    album: AlbumGlobalProps
}

const Album = (props: AlbumProps) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('AlbumScreen', { id: props.album.id })
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{uri: props.album.imageUri}} style={styles.image} />
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


export default Album