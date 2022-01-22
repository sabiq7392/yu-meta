import PropType from 'prop-types';

export default function Col({ children, className }) {
  return ( <div className={`col-12 ${className}`}>{children}</div> )
}

Col.propType = {
  className: PropType.string,
}