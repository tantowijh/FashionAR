// src/components/Layout.js
import React from 'react';
import '../css/custom.css';
import '../css/style.min.css';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <script src="assets/js/theme.min.js"></script>
    </div>
  );
};

export default Layout;