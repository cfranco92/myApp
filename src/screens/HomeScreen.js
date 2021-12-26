import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = (props) => {
    const { navigation } = props;
    
    const goToSettings = () => {
        navigation.navigate("Settings")
    }

    return (
        <View>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Button title='Go to Settings' onPress={goToSettings}/>
        </View>
    )
}

export default HomeScreen
