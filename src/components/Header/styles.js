import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
    height: 44px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border-bottom-color: #dddddd;
    border-bottom-width: 1;
    align-items: center;
    padding-left: 20px;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 116px;
    height: 19px;
`;

export const Back = styled(Icon)`
    position: absolute;
    left: 20px;
`;
