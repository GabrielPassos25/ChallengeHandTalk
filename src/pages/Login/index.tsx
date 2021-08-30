// Importação das bibliotecas utilizadas
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import LottieView from 'lottie-react-native';
import { Platform, ScrollView } from "react-native";
import LoadAnimation from '../../assets/login.json';
import { yupResolver } from "@hookform/resolvers/yup";
import { RFValue } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Importação de componentes pré-construidos
import {auth} from '../../../firebase';
import {Button} from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { SVGrender } from "../../components/SVGrender";

//Estilização dos componentes
import { Container, StatusBarAndroid, WelcomeTitle, WelcomeText, LogoContainer, InfoContainer, InputContainer} from "./styles";

//Verificador de erros input de login
const schema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
});

//Variáveis padrões para os componentes
interface Props {
  navigation: any;
}

interface FormData {
  email: string;
  password: string;
}

export function Login({ navigation } : Props) {
  //Controle do formulário de login
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Função para o login
  function handleLogin(form: FormData){
    const data = {
      email: form.email,
      senha: form.password
    }
    auth.signInWithEmailAndPassword(data.email, data.senha).then(function(){
        navigation.navigate('Home');
    }).catch(function(){
        alert("Credenciais inválidas. Verifique as credenciais inseridas e tente novamente!");
    })
  }

  return (
    <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={Platform.select({ios: {flex:1}})}>
      <ScrollView style={{flex:1}} bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{flex: 1}}>
        <Container>
          {Platform.OS === "android" ? <StatusBarAndroid /> : <></>}
          <LogoContainer>
              <SVGrender/>
          </LogoContainer>
          <InfoContainer>
              <LottieView
                  source = {LoadAnimation} autoPlay loop style={{width: RFValue(300), height: RFValue(300)}}
                  />
              <WelcomeTitle>Bem Vindo!</WelcomeTitle>
              <WelcomeText>Realize o login com suas credenciais para acessar a aplicação.</WelcomeText>
          </InfoContainer>
          <InputContainer>
              <InputForm control={control} name="email" type="email" error={errors.email && errors.email.message} title="Email"/>
              <InputForm control={control} name="password" type="password" error={errors.password && errors.password.message} title="Senha"/>
              <Button title="Entrar" type="login" onPress={handleSubmit(handleLogin)}/>
          </InputContainer>
        </Container>
      </ScrollView>
    </KeyboardAwareScrollView>
  );  
}
