import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
`;

export const ListCheckin = styled.FlatList`
    margin-top: 20px;
`;

export const Checkin = styled.View`
    margin-bottom: 10px;
    padding: 14px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #dddddd;
    border-radius: 4px;
    background: #ffffff;
`;

export const TextTitleCheckin = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #444444;
`;

export const TextDateCheckin = styled.Text`
    font-size: 14px;
    color: #666666;
`;
