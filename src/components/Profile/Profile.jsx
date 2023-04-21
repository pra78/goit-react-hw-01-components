import PropTypes from "prop-types";
import { Avatar, CardDescription, ProfileCard, StatsLabel, StatsList, StatsQuantity, UserLocation, UserName, UserTag } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <ProfileCard>
        <CardDescription>
            <Avatar
                src={avatar}
                alt="User avatar"
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
        </CardDescription>

        <StatsList>
            <li>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </li>
            <li>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </li>
        </StatsList>
    </ProfileCard>;
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};