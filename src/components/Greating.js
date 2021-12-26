import React from 'react'
import { View, Text } from 'react-native'

const Greating = ({firstName, lastName}) => {
    return (
        <View>
            <Text>Hello {firstName} {lastName}</Text>
        </View>
    )
}

Greating.defaultProps = {
    firstName: 'Alberto',
    lastName: 'Franco'
}

export default Greating
