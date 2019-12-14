import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Title, Date, Content, Card } from './styles';

export default function Question({ navigation }) {
    const { data } = navigation.state.params;

    return (
        <Container>
            <Card>
                <Header>
                    <Title>PERGUNTA</Title>
                    <Date>Hoje às 14h</Date>
                </Header>
                <Content>{data.question}</Content>
                <Title>RESPOSTA</Title>
                <Content>{data.answer}</Content>
            </Card>
        </Container>
    );
}

Question.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                data: PropTypes.object.isRequired,
            }),
        }),
    }).isRequired,
};
