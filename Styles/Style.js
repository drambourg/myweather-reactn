import {StyleSheet} from 'react-native'

export const myStyleColor = {
     mainColor : "#ffa600",
     mainColorAlternative : "#f0f0f0",
    secondaryColor : "#00a8dd",
    bodyColor : "#f8f8f8",
    textColor : "#252525",
}

export default StyleSheet.create({
    container: {
        backgroundColor: myStyleColor.bodyColor
    },
    header: {
        backgroundColor: myStyleColor.mainColor
    },
    headerTitle: {
        color: myStyleColor.bodyColor,
        fontSize : 22,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin : 20,
    },
    search:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin : 5,
        padding : 5,
    },
    loader:{
        color: myStyleColor.mainColor,
    }

})