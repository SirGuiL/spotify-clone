import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 200,
        height: 200,
        margin: 15
    },
    name: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 5
    },
    creator: {
        color: '#d3d3d3',
        margin: 5,
        fontSize: 14
    },
    likes: {
        color: '#d3d3d3',
        margin: 5,
        fontSize: 14
    },
    button: {
        backgroundColor: '#1cd05d',
        height: 40,
        width: 120,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default styles