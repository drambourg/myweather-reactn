import {StyleSheet} from 'react-native'

const mainColor = "#ffa600"
const secondaryColor = "#00a8dd"

export default StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: mainColor
    },
    headerTitle: {
        color: "#ffffff",
        fontSize : 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: secondaryColor,
    },
    search:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin : 5,
        padding : 5,
    },
    loader:{
        color: mainColor,
    }

})