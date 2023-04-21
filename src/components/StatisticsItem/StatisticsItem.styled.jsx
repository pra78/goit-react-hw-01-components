import styled from '@emotion/styled';

export const ItemCard = styled.li`
    background-color: ${() => "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()};
    padding: 10px 9.35px;
`;

export const Label = styled.span`
    color: white;
    display: block;
    margin-bottom: 10px;
`;

export const Percentage = styled.span`
    color: white;
    display: block;
    font-size: 28px;
`;