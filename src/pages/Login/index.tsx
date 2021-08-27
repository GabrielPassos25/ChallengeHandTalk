import React from "react";
import { Container, StatusBarAndroid, WelcomeTitle, WelcomeText, LogoContainer, InfoContainer, InputContainer} from "./styles";
import { Platform, ScrollView } from "react-native";
import LottieView from 'lottie-react-native';
import LoadAnimation from '../../assets/login.json';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {auth} from '../../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from "react-native-responsive-fontsize";

import { InputForm } from "../../components/InputForm";
import {Button} from "../../components/Button";
import { SVGrender } from "../../components/SVGrender";

const schema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
});

interface Props {
  navigation: any;
}

interface FormData {
  email: string;
  password: string;
}

export function Login({ navigation } : Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(form: FormData){
    const data = {
      email: form.email,
      senha: form.password
    }
    auth.signInWithEmailAndPassword(data.email, data.senha).then(function(){
        alert("Logado com sucesso!");
    }).catch(function(){
        alert("Credenciais inválidas. Verifique as credenciais inseridas e tente novamente!");
    })
  }

  return (
    <ScrollView style={{flex:1}} bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{flex: 1}}>
      <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={Platform.select({ios: {flex:1}})}>
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
              <Button title="Entrar" onPress={handleSubmit(handleLogin)}/>
          </InputContainer>
        </Container>
      </KeyboardAwareScrollView>
    </ScrollView>
  );  
}
