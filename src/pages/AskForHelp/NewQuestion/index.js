import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '~/services/api';

import Button from '~/components/Button';

import { Container, Form, TextArea } from './styles';

export default function NewQuestion() {
    const student = useSelector(state => state.auth.student);
    const [question, setQuestion] = useState('');

    function handleQuestion(value) {
        setQuestion(value);
    }

    async function submit() {
        await api.post(`/students/${student.id}/help-orders`, { question });
        Alert.alert(
            'Sucesso !',
            'Seu pedido de auxilio foi salvo com sucesso !'
        );
        setQuestion('');
    }

    return (
        <Container>
            <Form>
                <TextArea
                    multiline
                    placeholder="Inclua seu pedido de auxílio"
                    numberOfLines={15}
                    onChangeText={handleQuestion}
                    textAlignVertical="top"
                    onSubmitEditing={submit}
                    value={question}
                />
                <Button onPress={submit}>Enviar pedido</Button>
            </Form>
        </Container>
    );
}
