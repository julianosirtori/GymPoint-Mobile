import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
`;

export const ListAnswer = styled.FlatList`
    margin-top: 20px;
`;

export const Answer = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-bottom: 10px;
`;

export const HeaderAnswer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Status = styled.Text`
    color: ${props => (props.answer ? '#42CB59' : '#999999')};
    font-size: 14px;
    font-weight: bold;
    margin-left: 16px;
`;

export const Date = styled.Text`
    color: #666666;
    font-size: 14px;
`;

export const Content = styled.Text`
    font-size: 14px;
    color: #666666;
    line-height: 26px;
`;
