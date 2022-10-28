import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";

const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',

    },
    splashpic:{
        height:mvs(200),
        width:mvs(200)
    }
});
export default styles;