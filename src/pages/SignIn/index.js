import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, Image, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
    const dispatch = useDispatch();
    const [id, setId] = useState('');

    function handleSubmit() {
        dispatch(signInRequest(id));
    }

    return (
        <Container>
            <Image source={logo} />
            <Form>
                <FormInput
                    keyboardType="numeric"
                    autoCorrect={false}
                    placeholder="Informe seu ID de cadastro"
                    onChangeText={value => setId(value)}
                    onSubmitEditing={handleSubmit}
                />
                <SubmitButton onPress={handleSubmit}>
                    Entrar no Sistema
                </SubmitButton>
            </Form>
        </Container>
    );
}
