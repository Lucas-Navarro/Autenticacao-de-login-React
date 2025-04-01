import {Text, TextInput, Button, View, Alert } from 'react-native';
//comando para salvar os dados dentro de uma variavel 
import { useState } from 'react';
import mascara from '../css/estilo';
import Firebase from '../factory/autenticador'

export default function Telalogin({ navigation }) {

  const [email, pegaEmail] = useState('');
  const [senha, pegaSenha] = useState('');
  
 function Acesso(){
   Firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Usuario não cadastrado');
      });
 }
 function CadastrarUser(){
     Firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert('Cadastrado com sucesso');
        pegaEmail('');
        pegaSenha('');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email já existe');
        } else if (error.code === 'auth/invalid-email') {
          alert('Email inválido');
        } else {
          alert(error.message);
        }
      });

 }

  return (
    <View style={mascara.container}>
      <Text style={mascara.title}>Sistema Azul</Text>
      <TextInput
        style={mascara.input}
        value={email}
        onChangeText={pegaEmail}
        placeholder="Digite o email do usuário"
        autoCapitalize="none"
      />
      <TextInput
        style={mascara.input}
        value={senha}
        onChangeText={pegaSenha}
        placeholder="Senha"
        secureTextEntry
      />
      <Button title="Entrar" onPress={Acesso} />
      <Button title="Cadastrar" onPress={CadastrarUser} />
    </View>
  );
}

