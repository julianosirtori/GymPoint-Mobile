import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
    background: #ffffff;
    flex: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;

export const Image = styled.Image`
    width: 122px;
    height: 80px;
`;

export const Form = styled.View`
    width: 100%;
`;

export const FormInput = styled.TextInput`
    font-size: 15px;
    margin-top: 20px;
    color: #999999;
    padding: 10px 20px;
    border: 1px solid #dddddd;
    border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 20px;
`;
