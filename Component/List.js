import React from 'react'
import {Text, ActivityIndicator} from 'react-native'
import mainStyle from '../Styles/Style'
export default class List extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            city: 'Orléans',//this.props.navigation.state.params.city,
            report:null,
        }
    }

    render () {
            if (this.state.report === null) {
                return(
                    <ActivityIndicator size='large' color={mainStyle.loader.color}/>
                )
            } else {
                return(
                    <Text>Coucou</Text>
                )
            }
    }

}
