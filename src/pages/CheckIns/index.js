import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Button from '~/components/Button';
import {
    Container,
    ListCheckin,
    Checkin,
    TextTitleCheckin,
    TextDateCheckin,
} from './styles';

export default function CheckIns() {
    const student = useSelector(state => state.auth.student);
    const [checkIns, setCheckIns] = useState([]);

    useEffect(() => {
        async function loadCheckIns() {
            const response = await api.get(`/students/${student.id}/checkins`);
            setCheckIns(
                response.data.map(item => ({
                    ...item,
                    dateFormated: formatDistance(
                        parseISO(item.createdAt),
                        new Date(),
                        {
                            locale: pt,
                        }
                    ),
                }))
            );
        }
        loadCheckIns();
    }, [student.id]);

    async function newCheckIn() {
        const response = await api.post(`/students/${student.id}/checkins`);
        setCheckIns([
            {
                ...response.data,
                dateFormated: formatDistance(
                    parseISO(response.data.createdAt),
                    new Date(),
                    {
                        locale: pt,
                    }
                ),
            },
            ...checkIns,
        ]);
    }

    return (
        <Container>
            <Button onPress={newCheckIn}>Novo check-in</Button>
            <ListCheckin
                data={checkIns}
                renderItem={({ item }) => (
                    <Checkin>
                        <TextTitleCheckin>{`Check-in #${item.id}`}</TextTitleCheckin>
                        <TextDateCheckin>{item.dateFormated}</TextDateCheckin>
                    </Checkin>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </Container>
    );
}

function TabBarIcon({ tintColor }) {
    return <Icon name="event" size={20} color={tintColor} />;
}

TabBarIcon.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

CheckIns.navigationOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon: TabBarIcon,
};
