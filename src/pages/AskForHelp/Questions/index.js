import React, { useEffect, useState } from 'react';
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

export default function Questions() {
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

    return (
        <Container>
            <Button>Novo pedido de auxílio</Button>
            <ListAnswer
                data={questions}
                renderItem={({ item }) => (
                    <Answer key={item.id}>
                        <HeaderAnswer>
                            <Left>
                                <Status>Sem resposta</Status>
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
