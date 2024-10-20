import PropTypes from 'prop-types';

const Button = ({ children, className, onClick, type }) => {
  return (
    <div className={className} onClick={onClick} type={type}>
      {children}
    </div>
  );
};

// Prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children are passed
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: 
  PropTypes.oneOf(['button', 'submit', 'reset']).isRequired, // Ensures that type
};

export default Button;
