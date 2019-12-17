import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import logo from '~/assets/logo_header.png';

import { Container, Image, Back } from './styles';

export default function Header({ navigation }) {
    console.tron.log(navigation);
    const routeName = navigation ? navigation.state.routeName : '';
    return (
        <Container>
            <Back>
                {navigation && routeName !== 'ListQuestions' && (
                    <Icon
                        name="chevron-left"
                        size={24}
                        onPress={() => {
                            navigation.navigate('ListQuestions');
                        }}
                    />
                )}
            </Back>
            <Image source={logo} />
        </Container>
    );
}

Header.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            routeName: PropTypes.string,
        }),
        navigate: PropTypes.func,
    }),
};
