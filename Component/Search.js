import React from 'react'
import {TextInput, StyleSheet, View} from 'react-native'

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city:'Orléans',
        }
    }

    setCity(city) {
        this.setState({
            city: city,
        })
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.search}
                    underlineColorAndroid='transparent'
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                    />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    search : {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})