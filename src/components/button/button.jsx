import PropTypes from 'prop-types';

const Button = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

// Prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children are passed
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
