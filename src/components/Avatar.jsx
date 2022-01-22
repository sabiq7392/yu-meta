import PropTypes from 'prop-types';

export default function Avatar({ img, username, className, height = 30, width = 30 }) {
  return (
    <div className="d-flex gap-2 align-items-center">
      <img 
        src={img} 
        alt={username} 
        width={width} 
        height={height}
        className={`rounded-circle ${className}`} 
      />
      <p className="m-0 yu-text-v-lighter">{username}</p>
    </div>
  );
}

Avatar.propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  className: PropTypes.string,
};
