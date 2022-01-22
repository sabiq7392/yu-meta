import PropType from 'prop-types';

export function Row({ children, className = '' }) {
  return (
    <div className={`row ${className}`}>{children}</div>
  )
}

export function Col({ children, className, colDefault = 'col-12' }) {
  return ( <div className={`${colDefault} ${className}`}>{children}</div> )
}

Row.propTypes = {
  className: PropType.string,
}

Col.propType = {
  className: PropType.string,
}