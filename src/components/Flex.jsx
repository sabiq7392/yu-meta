import PropTypes from 'prop-types';

export default function Flex({ children, className }) {
  return ( <div className={`d-flex ${className}`}>{children}</div> );
}

Flex.propTypes = {
  className: PropTypes.string,
};
