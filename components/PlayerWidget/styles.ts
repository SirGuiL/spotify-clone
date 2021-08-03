import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 49,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#191414',
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    },
    image: {
        width: 65,
        height: 65
    },
    content: {
        justifyContent: 'center',
        marginLeft: 15
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    artist: {
        color: '#d3d3d3',
        fontSize: 14
    },
    contentIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    icon: {
        marginRight: 15
    }
})

export default styles