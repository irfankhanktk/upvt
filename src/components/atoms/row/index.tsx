import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { mvs } from '../../../config/metrices'
type props = {
    contentContainerStyle?: StyleProp<ViewStyle>
    children?: JSX.Element | JSX.Element[]
}
export const Row = (props: props) => {
    const { children, contentContainerStyle} = props;
    return (
        <View
            style={[styles.contentContainerStyle, contentContainerStyle]}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection:'row',
        justifyContent:'space-between',
    }
})