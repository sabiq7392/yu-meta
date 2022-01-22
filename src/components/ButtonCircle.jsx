import PropTypes from 'prop-types';

export default function ButtonCircle({ children, className, style, type, backgroundColor = 'bg-white' }) {
  return (
    <button 
      className={`btn rounded-circle py-2 ${className} ${backgroundColor}`} 
      style={style} 
      type={type}
    >
      {children}
    </button>
  );
}

ButtonCircle.propType = {
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  backgroundColor: PropTypes.string,
};
