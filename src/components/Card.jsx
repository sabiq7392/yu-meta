import PropTypes from 'prop-types';

export default function Card({ children, className = '' }) {
  return ( <div className={`card ${className}`}>{children}</div> );
}

export function CardHeader({ children, className = '' }) {
  return ( <div className={`card-header ${className}`}>{children}</div> );
}

export function CardBody({ children, className = '' }) {
  return ( <div className={`card-body ${className}`}>{children}</div> );
}

Card.propTypes = {
  className: PropTypes.string,
};

CardHeader.propTypes = {
  className: PropTypes.string,
};

CardHeader.propTypes = {
  className: PropTypes.string,
};
