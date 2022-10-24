import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    contentContainerStyle: {
        padding: mvs(20),
        paddingTop: mvs(10),
    },
    button: {
        marginTop: mvs(100),
    },
    accountText: {
        color: colors.primary,
        alignSelf: 'center',
        marginVertical: mvs(20)
    },
    smallButton: {
        width: '49%'
    }, 
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: mvs(22),
        marginTop:mvs(100),

    },
    progress:{
        marginVertical:mvs(20),
    }

});
export default styles;