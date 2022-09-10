import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  ProfileImage,
  ProfileName,
  ProfileNameInfo,
  Stats,
  StatsElement,
  StatsElementLabel,
  StatsElementQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <ProfileImage src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileNameInfo>@{tag}</ProfileNameInfo>
        <ProfileNameInfo>{location}</ProfileNameInfo>
      </Description>
      <Stats>
        <StatsElement>
          <StatsElementLabel>Followers</StatsElementLabel>
          <StatsElementQuantity>{stats.followers}</StatsElementQuantity>
        </StatsElement>
        <StatsElement>
          <StatsElementLabel>Views</StatsElementLabel>
          <StatsElementQuantity>{stats.views}</StatsElementQuantity>
        </StatsElement>
        <StatsElement>
          <StatsElementLabel>Likes</StatsElementLabel>
          <StatsElementQuantity>{stats.likes}</StatsElementQuantity>
        </StatsElement>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
