import { StyleSheet } from "react-native";

const styles = StyleSheet.create({



FormContext:{
backgroundColor : "#FFFFFF",
borderRadius :30,
alignItems : "flex-start",
width :"100%",
height :"100%",
bottom :0,
maxHeight:"80%",
paddingTop:50,

    
},

FormTitle :{
    color :"black",
    fontSize :24,
    fontWeight:"bold",


    },
    
    Form :{
    marginLeft:20,
    width: "90%",
  
        },

        buttonCalculator: {
            alignItems: "center",
            justifyContent: "center",
            width: "100%", // Definindo a largura como "100%" para ocupar o contêiner inteiro.
            backgroundColor: "#914646",
            padding: 20,
            marginTop :10,
            borderRadius :30,

       
          },
          buttonText: {
           
            color : "#FFFFFF",
          },
        
          FormInput: {
           borderRadius :20,
           backgroundColor :"#e0e5e5",
           padding :10,

          
          }

     
        

});
export default styles