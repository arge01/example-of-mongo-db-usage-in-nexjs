import React from 'react';

function Header({ className, children }) {
  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </header>
  );
}

export default Header;
