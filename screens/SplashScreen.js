
import React , { Component } from 'react'
import { Text, Image, StyleSheet } from 'react-native'

class SplashScreen extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Image source={require('../assets/LOGO-CAN-2023.png')} style={styles.image}/>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 150, width: 120
    }
})

export default SplashScreen;