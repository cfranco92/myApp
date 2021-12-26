import React, { Component } from 'react'
import { Text, TextInput, Button, View } from 'react-native'

export default function LoginForm() {
    return(
        <View>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password'/>
            <Button title='Send' onPress={() => console.log("Sent")}/>
        </View>
    )
}
