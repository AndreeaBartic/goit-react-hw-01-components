import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      {Object.entries(stats).map(([key, value]) => (
        <li className={css.items} key={key}>
          <span className={css.label}>
            {key[0].toUpperCase() + key.slice(1)}
          </span>
          <span className={css.quantity}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
