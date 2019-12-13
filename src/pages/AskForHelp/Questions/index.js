import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import Button from '~/components/Button';
import {
    Container,
    Answer,
    ListAnswer,
    HeaderAnswer,
    Left,
    Date,
    Status,
    Content,
} from './styles';

export default function Questions({ navigation }) {
    const student = useSelector(state => state.auth.student);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function loadQuestions() {
            const response = await api.get(
                `/students/${student.id}/help-orders`
            );
            setQuestions(
                response.data.map(item => ({
                    ...item,
                    dataFormated: 'teste',
                }))
            );
        }
        loadQuestions();
    }, [student.id]);

    function handleNewQuestion() {
        navigation.navigate('NewQuestion');
    }

    function handleViewAnswer(question) {
        navigation.navigate('Answer', { question });
    }

    return (
        <Container>
            <Button onPress={handleNewQuestion}>Novo pedido de auxílio</Button>
            <ListAnswer
                data={questions}
                renderItem={({ item }) => (
                    <Answer
                        key={item.id}
                        onPress={() => handleViewAnswer(item)}
                    >
                        <HeaderAnswer>
                            <Left>
                                <Icon
                                    name="check-circle"
                                    size={16}
                                    color={item.answer ? '#42CB59' : '#999999'}
                                />
                                <Status answer={item.answer ? 1 : 0}>
                                    Sem resposta
                                </Status>
                            </Left>
                            <Date>{item.dataFormated}</Date>
                        </HeaderAnswer>
                        <Content>{item.question}</Content>
                    </Answer>
                )}
            />
        </Container>
    );
}
