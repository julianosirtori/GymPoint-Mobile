import React from 'react';

import logo from '~/assets/logo_header.png';

import { Container, Image, Back } from './styles';

export default function Header({ navigation }) {
    console.tron.log(navigation);
    return (
        <Container>
            {/* {navigation && navigation.state.routes.length > 1 && (
                <Back
                    name="chevron-left"
                    size={24}
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            )} */}

            <Image source={logo} />
        </Container>
    );
}
