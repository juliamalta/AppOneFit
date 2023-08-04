import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props){
return (
<View style= {styles.FormResult}>
<Text style ={styles.ResultImc}>{props.resultImc}</Text>
<Text style ={styles.information}>{props.messageResultImc}</Text>
    </View>
);
}
