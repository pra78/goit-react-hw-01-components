import PropTypes from "prop-types";
import { Avatar, FriendItem, Name, Status } from "./FriendCard.styled";

export const FriendCard = ({ avatar, name, isOnline }) => {
    return <FriendItem>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </FriendItem>;
}

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}