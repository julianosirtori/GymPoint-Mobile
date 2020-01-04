import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_header.png';

import { Container, Image, Back, Logout } from './styles';

export default function Header({ navigation }) {
    const dispatch = useDispatch();
    const routeName = navigation ? navigation.state.routeName : '';

    function logout() {
        dispatch(signOut());
    }

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
            <Logout onPress={logout}>
                <Icon name="exit-to-app" color="#ee4e62" size={24} />
            </Logout>
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
