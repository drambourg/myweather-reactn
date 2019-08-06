import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import {myStyleColor} from '../Styles/Style'
import FadeInEnter from "../Animation/FadeInEnter";

moment.locale('fr')

export default class RowWeather extends React.Component {

    day() {
        let day = moment(this.props.dayWeather.dt * 1000).format('ddd')
        return (
            <Text style={[style.mainColor]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let date = moment(this.props.dayWeather.dt * 1000).format('DD/MM')
        return (
            <Text style={[style.bold, style.mainColor]}>{date}</Text>
        )
    }

    timeHour() {
        let timeHour = moment(this.props.dayWeather.dt * 1000).format('hh:mm')
        return (
            <Text style={[style.bold, style.mainColor, style.mainBigText]}>{timeHour}</Text>
        )
    }

    icon(size = 40) {
        let type = this.props.dayWeather.weather[0].main.toLowerCase()
        let image
        switch (type) {
            case 'clouds' :
                image = require('../Images/cloud.png');
                break;
            case 'rain' :
                image = require('../Images/drops.png');
                break;
            default :
                image = require('../Images/sun.png');
        }
        return (
            <View style={style.weather}>
                <Image source={image} style={{width: size, height: size}}/>
                <Text>{type}</Text></View>
        )
    }

    temp() {
        let temp = Math.floor(this.props.dayWeather.main.temp)
        return (temp)
    }

    render() {

        if (this.props.index === 0) {
            return (
                <FadeInEnter delay={this.props.index * 50}>
                    <View style={[style.view, style.firstTemp, {
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }]}>
                        {this.icon(100)}
                        <View style={style.date_container}>
                            <Text style={{color: '#FFF', fontSize: 40, fontWeight: 'bold'}}>{this.temp()} °C</Text>
                            <Text style={{color: '#FFF', fontSize: 20}}>{this.day()} {this.date()}</Text>
                            <Text style={{color: '#FFF', fontSize: 20}}>{this.timeHour()}</Text>
                        </View>
                    </View>
                </FadeInEnter>
            )
        } else {
            return (
                <FadeInEnter delay={this.props.index * 50}>
                    <View style={style.view}>
                        {this.icon()}
                        <View style={style.date_container}>
                            <Text>{this.day()} {this.date()}</Text>
                            <Text>{this.timeHour()}</Text>
                        </View>

                        <Text style={style.temp}>{this.temp()} °C</Text>
                    </View>
                </FadeInEnter>
            )
        }

    }
}

const style = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    mainColorText: {
        color: myStyleColor.textColor,
    },
    mainBigText: {
        fontSize: 15,
    },
    firstTemp: {
        backgroundColor: myStyleColor.secondaryColor,

    },
    view: {
        backgroundColor: myStyleColor.mainColorAlternative,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: myStyleColor.bodyColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    temp: {
        color: myStyleColor.secondaryColor,
        fontWeight: 'bold',
        fontSize: 22,
    },
    date_container: {
        flexDirection: 'column',

    },
    weather: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40
    }

})