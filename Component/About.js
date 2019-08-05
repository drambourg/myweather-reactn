import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import mainStyle from '../Styles/Style'

export default class About extends React.Component {
    constructor(props) {
        super(props)
    }

    search() {

    }

    render() {
        return (
            <View style={mainStyle.container}>
                <Text style={mainStyle.title}> A propos de l'app</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sit amet nulla eu diam malesuada pellentesque in ut sapien. Praesent auctor imperdiet lobortis.
                </Text>
                <Button title={'Rechercher'} onPress = {() => this.search()} style={mainStyle.button}/>
            </View>
        )

    }
}


const styles = StyleSheet.create({

});
