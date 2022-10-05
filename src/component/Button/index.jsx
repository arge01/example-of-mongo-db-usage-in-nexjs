import React from 'react';

function Button({
  type = 'button',
  onClick = () => {},
  icon = false,
  className,
  btn = 'primary',
  children,
  ...restProps
}) {
  return (
    <button
      className={`button btn btn-${btn} ${className}`}
      type={type}
      onClick={onClick}
      {...restProps}
    >
      {icon && <i className={icon}></i>} {children}
    </button>
  );
}

export default Button;
