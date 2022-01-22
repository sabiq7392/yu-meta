import PropTypes from 'prop-types';

export default function Avatar({ img, username, className }) {
  return (
    <div className="d-flex gap-2">
      <img 
        src={img} 
        alt={username} 
        width={30} 
        height={30}
        className={`rounded-circle ${className}`} 
      />
      <p>{username}</p>
    </div>
  );
}

Avatar.propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  className: PropTypes.string,
};
