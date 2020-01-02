import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
`;

export const Card = styled.View`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #dddddd;
    border-radius: 4px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #444444;
    font-size: 14px;
    font-weight: bold;
`;

export const DateText = styled.Text`
    color: #666666;
    font-size: 14px;
`;

export const Content = styled.Text`
    margin-bottom: 20px;
    margin-top: 20px;
    color: #666666;
    line-height: 26px;
`;
