import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'

const HomeScreen = (props) => {
    const { navigation } = props;
    
    const goToSettings = () => {
        navigation.navigate("Settings")
    }

    return (
        <SafeAreaView>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Text>We are at Home</Text>
            <Button title='Go to Settings' onPress={goToSettings}/>
        </SafeAreaView>
    )
}

export default HomeScreen
