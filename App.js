import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import About from "./Component/About";
import Search from "./Component/Search";

export default function App() {
    return (
        <View style={styles.main_container}>
            <Search/>
        </View>

    );
}

const styles = StyleSheet.create( {
  main_container: {
    marginTop : 50
  }


})
