import PropTypes from "prop-types";
import { FriendCard } from "components/FriendCard/FriendCard";
import { FriendsList } from "./Friends.styled";


export const Friends = ({friends}) => {
    return <FriendsList>
        {friends.map(({ id, isOnline, avatar, name }) => (
            <FriendCard key={id} isOnline={isOnline} avatar={avatar} name={name} />
        ))}
    </FriendsList>;
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}