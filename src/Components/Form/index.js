
import React from "react";
import { View, Text ,TextInput, Button } from "react-native";


export default function Form(){
return (
<View>
<View>
<Text>Altura</Text>
<TextInput placeholder="Ex :1.75" returnKeyType="numeric"></TextInput>

<Text>Peso</Text>
<TextInput placeholder="Ex:86.800" returnKeyType="numeric"/>
<Button title="Calcular"></Button>
</View>
<ResultImc/>
    </View>
);
}
