import PropTypes from 'prop-types';

export function Flex({ children, className }) {
  return ( <div className={`d-flex ${className}`}>{children}</div> );
}

Flex.propTypes = {
  className: PropTypes.string,
};

export function Grid({ children, className }) {
  return ( <div className={`d-grid ${className}`}>{children}</div> )
}
