import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'

const SettingsScreen = (props) => {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName)
    }

    return (
        <SafeAreaView>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Text>WE are in Settings</Text>
            <Button onPress={() => goToPage("Home")} title="Go Home"/>
        </SafeAreaView>
    )
}

export default SettingsScreen
