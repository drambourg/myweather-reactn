import React from 'react'
import {TextInput, StyleSheet, View, Button} from 'react-native'
import mainStyle from '../Styles/Style'
import {createStackNavigator} from 'react-navigation'

class Search extends React.Component {

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

    submit() {
        this.props.navigation.navigate('Result',
            {
                city: this.state.city,
            })
    }



    render() {
        return (
            <View style={mainStyle.container}>
                <TextInput
                    style={mainStyle.search}
                    underlineColorAndroid='transparent'
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                    />
                <Button title={'Rechercher ...'} onPress = {() => this.submit()} />
            </View>
        )
    }
}

export default Search