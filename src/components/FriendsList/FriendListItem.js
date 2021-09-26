import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultImg from '../default.jpg';

export default function FriendListItem({
  avatar = defaultImg,
  name,
  isOnline,
}) {
  return (
    <div className={s.friendWrapper}>
      <span
        className={s.online}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
