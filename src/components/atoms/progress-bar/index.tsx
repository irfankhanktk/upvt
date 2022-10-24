import React from 'react'
import { KeyboardTypeOptions, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import * as Progress from 'react-native-progress'
import { colors } from '../../../config/colors'
import { mvs, width } from '../../../config/metrices'
type props = {
    value: number
    style?: StyleProp<ViewStyle>
    color?:string
}
const ProgressBar = (props: props) => {
    const {
        value=0.4,
        style,
        color=colors.primary,
    } = props;

    return (
        <View style={[styles.Container,style]}>
            <Progress.Bar  animationType={'timing'} borderRadius={mvs(10)} height={mvs(15)} color={color}  progress={value} width={width-mvs(44)} />
        </View>
    )
};

export default React.memo(ProgressBar)
const styles = StyleSheet.create({
    Container: {
        paddingTop: mvs(7),
        marginBottom: mvs(15),
        paddingHorizontal:mvs(22),
        alignSelf:'center',
    },
    textInput: {
        color: colors.black,
        textAlignVertical: 'center',
        height: mvs(40),
    },
})