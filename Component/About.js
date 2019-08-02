import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class About extends React.Component {


    render() {
        return (
            <View>
                <Text style={styles.title}> A propos de moi</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque sit amet nulla eu diam malesuada pellentesque in ut sapien. Praesent auctor imperdiet lobortis.
                </Text>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )

    }
}


const styles = StyleSheet.create({
    title: {
        marginBottom :20,
        fontSize : 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
