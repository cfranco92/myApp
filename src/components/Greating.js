import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

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

Greating.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default Greating
