import React from 'react'
import { View, Text, Button } from 'react-native'

const SettingsScreen = (props) => {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName)
    }

    return (
        <View>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Button onPress={() => goToPage("Home")} title="Go Home"/>
        </View>
    )
}

export default SettingsScreen
