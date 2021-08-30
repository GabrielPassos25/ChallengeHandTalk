import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type: string;
}

export function Button({ title, type, ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
