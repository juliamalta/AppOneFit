import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha os dados");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("calcular");

  function imcCalculator() {
    setImc(parseFloat((weight / (height * height)).toFixed(2)));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
  
      setMessageImc("Seu imc é igual:");
      setTextButton("calcular novamente");

  }else {

  setImc(null);
  setTextButton("calcular");
  setMessageImc("Preencha os dados");
  }
  }
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          returnKeyType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 86.800"
          returnKeyType="numeric"
        />
        <Button onPress={() => validationImc()} title={textButton} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

