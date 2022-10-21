import React from 'react'
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/colors'
import { mvs } from '../../../config/metrices'
import Regular from '../../../typography/regular-text'
type props = {
    onChangeText: (text:string) => void
    value: string
    label: string
    placeholder?: string
    style?:StyleProp<ViewStyle>
    labelStyle?:StyleProp<ViewStyle>
    containerStyle?:StyleProp<ViewStyle>
    secureTextEntry?: boolean | undefined
    keyboardType?: KeyboardTypeOptions | undefined
}
 const PrimaryInput = (props: props) => {
    const {
        onChangeText,
        value,
        style,
        label,
        placeholder='type here',
        labelStyle,
        containerStyle,
        secureTextEntry,
        keyboardType

    } = props;
    return (
        <View style={[styles.Container,containerStyle]}>
            <Regular style={[styles.labelStyle,labelStyle]} label={label}/>
            <TextInput keyboardType={keyboardType} secureTextEntry={secureTextEntry}  value={value} placeholder={placeholder} onChangeText={onChangeText} style={[styles.textInput,style]}/>
        </View>
    )
};

export default React.memo(PrimaryInput)
const styles = StyleSheet.create({
    Container:{
        borderBottomWidth:0.7,
        paddingTop:mvs(7),
        marginBottom:mvs(15),
    },
    textInput:{
        color:colors.black,
        textAlignVertical:'center',
        height:mvs(40),
    },
    labelStyle:{
        color:colors.primary,
    },
})