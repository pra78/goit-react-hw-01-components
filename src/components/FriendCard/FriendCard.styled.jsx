import styled from '@emotion/styled';

export const FriendItem = styled.li`
    max-width: 350px;
    display: flex;
    padding: 5px;
    text-align:center;
    margin: 0 auto 10px auto;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Status = styled.span`
    margin: 20px 10px 0 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => {
        switch (props.isOnline) {
            case true:
                return "green";
            case false:
                return "red";
            default:
                return "grey";
        }
    }};
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Name = styled.p`
    font-weight: 700;
`;
