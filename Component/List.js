import React from 'react'
import {Text, ActivityIndicator, FlatList, View} from 'react-native'
import mainStyle from '../Styles/Style'
import axios from 'axios'
import RowWeather from './RowWeather'

const appWeatherKey = '20ef3215f2313895f24e70fcdb02eb2a'
export default class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null,
        }
        setTimeout(() =>
            this.fetchWeather(), 1000
        )
    }

    fetchWeather() {
        axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=` + appWeatherKey
        )
            .then((response) => {
                this.setState({report: response.data})
            })
    }


    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator size='large' color={mainStyle.loader.color}/>
            )
        } else {

            return (
                <View>
                    <FlatList
                        data={this.state.report.list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <RowWeather dayWeather={item} index={index}/>}
                    />
                </View>
            )
        }
    }

}
