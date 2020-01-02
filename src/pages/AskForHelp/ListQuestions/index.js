import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
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

function ListQuestions({ navigation, isFocused }) {
    const student = useSelector(state => state.auth.student);
    const [questions, setQuestions] = useState([]);

    async function loadQuestions() {
        const response = await api.get(`/students/${student.id}/help-orders`);
        setQuestions(
            response.data.map(item => ({
                ...item,
                dataFormated: '',
            }))
        );
    }

    useEffect(() => {
        loadQuestions();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (isFocused) {
            loadQuestions();
        }
        // eslint-disable-next-line
    }, [isFocused]);

    function handleNewQuestion() {
        navigation.navigate('NewQuestion');
    }

    function handleViewAnswer(question) {
        navigation.navigate('Question', { data: question });
    }

    return (
        <Container>
            <Button onPress={handleNewQuestion}>Novo pedido de auxílio</Button>
            <ListAnswer
                data={questions}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Answer onPress={() => handleViewAnswer(item)}>
                        <HeaderAnswer>
                            <Left>
                                <Icon
                                    name="check-circle"
                                    size={16}
                                    color={item.answer ? '#42CB59' : '#999999'}
                                />
                                <Status answer={item.answer ? 1 : 0}>
                                    {item.answer
                                        ? 'Respondido'
                                        : 'Sem resposta'}
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

ListQuestions.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    isFocused: PropTypes.bool,
};

export default withNavigationFocus(ListQuestions);
