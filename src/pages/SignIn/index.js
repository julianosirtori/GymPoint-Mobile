import React from 'react';

import { Container, Form, FormInput, Image, SubmitButton } from './styles';

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
                <SubmitButton>Entrar no Sistema</SubmitButton>
            </Form>
        </Container>
    );
}
