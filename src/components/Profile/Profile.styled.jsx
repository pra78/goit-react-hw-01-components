import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    max-width: 350px;
    text-align:center;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CardDescription = styled.div``;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 200px;
    padding: 40px;
`;

export const UserName = styled.p`
    text-align: center;
    margin: 10px;
    font-size: 32px;
    font-weight: 700;
`;

export const UserTag = styled.p`
    text-align: center;
    font-size: 24px;
    color: grey;
    margin: 0;
    line-height: 1.4;
`;

export const UserLocation = styled.p`
    text-align: center;
    font-size: 24px;
    color: grey;
    margin: 0;
    line-height: 1.4;
    margin-bottom: 10px;
`;

export const StatsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    background-color: #f6f8fa;
`;

export const StatsLabel = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    color: grey;
    margin: 30px 0 5px 0;
`;

export const StatsQuantity = styled.span`
    display: block;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 30px 0;
`;