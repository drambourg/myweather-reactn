import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Navigation from './Navigation/Navigation';

export default function App() {
    return (
        <SafeAreaView style={styles.main_container}>
            <Navigation/>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }


})
