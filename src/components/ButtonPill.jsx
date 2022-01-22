import PropTypes from 'prop-types';

export default function ButtonPill(
  { children, id, className, type, style, dataBsToggle, ariaExpanded, backgroundColor = 'bg-white' }
) {
  return (
    <button 
      id={id} 
      data-bs-toggle={dataBsToggle} 
      aria-expanded={ariaExpanded}
      className={`btn d-flex gap-2 rounded-pill px-3 ${backgroundColor} ${className}`} 
      type={type} 
      style={style}
    >
      {children}
    </button>
  );
}

ButtonPill.propTypes = {
  id: PropTypes.string,
  dataBsToggle: PropTypes.string,
  ariaExpanded: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
};
