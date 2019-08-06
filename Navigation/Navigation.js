import React from 'react'
import { StyleSheet, Image } from 'react-native'
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import Search from '../Component/Search'
import About from '../Component/About'
import List from "../Component/List";
import mainStyle from "../Styles/Style";

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher une ville',
            headerStyle : mainStyle.header,
            headerTitleStyle : mainStyle.headerTitle,
        }
    },
    Result : {
        screen : List,
        navigationOptions : ({navigation}) => {
           return {
               title: 'Météo / ' + navigation.state.params.city,
               headerStyle : mainStyle.header,
               headerTitleStyle : mainStyle.headerTitle,
           }
        }
    }
})

const AboutStackNavigator = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: {
            title: 'A propos',
        }
    },
})

const WeatherNavigation = createBottomTabNavigator({
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../Images/ic_search.png')}
                    style={styles.icon}/>
            }
        }
    },
    About: {
        screen: AboutStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../Images/ic_info.png')}
                    style={styles.icon}/>
            }
        }
    }
},
    {
        tabBarOptions: {
            activeBackgroundColor: '#f8c741',
            inactiveBackgroundColor: '#f0f0f0',
            showLabel: false,
            showIcon: true,
            style: {
                borderTopWidth: 2,
            }
        }
    })


const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(WeatherNavigation)