import PropTypes from 'prop-types';
import { Friends, FriendItem, FriendStatus, FriendName } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return ( 
    <Friends>
            {friends.map(friend => (
        <FriendItem key={friend.id}>
        <FriendStatus status={friend.isOnline}></FriendStatus>
        <img src={friend.avatar} alt={friend.name} width="48" />
        <FriendName>{friend.name}</FriendName>
        </FriendItem>            
    ))}
</Friends>
)}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}