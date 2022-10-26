import React from 'react'
import { ColorValue, StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../config/colors'
import { mvs } from '../../../config/metrices'
import Regular from '../../../typography/regular-text'
type props = {
    size?: number | "small" | "large" | undefined
    color?: ColorValue | undefined
    items: any[]
    setItems: (items: any[]) => void
    label?: string
}

export const MultiSelection = (props: props) => {
    const { 
        size = 'small',
        items = [
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
            { title: 'title here ', flag: false },
        ],
        setItems = (items) => { },
        label,

    } = props;
    return (
        <>
            {label && <Regular style={styles.label} label={label} />}
            <View style={styles.container}>
                {
                    items.map((item, index) => <TouchableOpacity
                        onPress={() => {
                            const copy = [...items];
                            copy[index].flag = !item?.flag;
                            setItems(copy);
                        }}
                        key={index} style={[styles.item, { backgroundColor: item?.flag ? colors.primary : colors.secondary }]}>
                        <Regular color={item?.flag ? colors.white : colors.black} label={item?.title} />
                    </TouchableOpacity>)
                }
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: colors.primary,
        borderRadius: mvs(12),
        paddingVertical: mvs(3),
        paddingHorizontal: mvs(10),
        marginRight: mvs(10),
        marginBottom: mvs(15),

    },
    label: {
        marginVertical: mvs(7),
        color:colors.primary
    }

})