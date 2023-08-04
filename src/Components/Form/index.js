import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("*Preencha os dados referente a altura e peso");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("CALCULAR");

  function imcCalculator() {
    setImc(parseFloat((weight / (height * height)).toFixed(2)));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
  
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular novamente");

  }else {

  setImc(null);
  setTextButton("CALCULAR");
  setMessageImc("Preencha os dados referente a altura e peso");
  }
  }
  return (
    <View style={styles.FormContext}>
      <View style={styles.Form}>
        <Text style={styles.FormTitle}>Altura</Text>
        <TextInput style={styles.FormInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.FormTitle}>Peso</Text>
        <TextInput style={styles.FormInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 86.800"
          keyboardType="numeric"
        />
     <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc style={styles.FormResult} messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

