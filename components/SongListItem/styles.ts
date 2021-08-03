import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        margin: 15
    },
    image: {
        width: 75,
        height: 75
    },
    content: {
        justifyContent: 'space-around',
        marginLeft: 15
    },
    title: {
        color: '#fff',
        fontSize: 20
    },
    artist: {
        color: '#d3d3d3',
        fontSize: 18
    }
})

export default styles