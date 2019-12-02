import React from 'react';

import {
  Container,
  Form,
  FormInput,
  Image,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
        />
        {/* <SubmitButton onPress={() => {}}>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton> */}
      </Form>
    </Container>
  );
}
