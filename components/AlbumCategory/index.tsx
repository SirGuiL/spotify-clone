import React from 'react'
import {FlatList, Text, View} from 'react-native'

import Album from '../Album'

import { AlbumGlobalProps } from '../../types'
import styles from './styles'

export type AlbumCategoryProps = {
    title: string;
    albums: [AlbumGlobalProps]
}

const AlbumCategory = (props: AlbumCategoryProps) => (
    <View style={styles.container}>
        <Text style={styles.text}> {props.title} </Text>
        <FlatList 
            data={props.albums}
            renderItem={({ item }) => <Album album={item} />}
            keyExtractor={( item ) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
    </View>
)

export default AlbumCategory
