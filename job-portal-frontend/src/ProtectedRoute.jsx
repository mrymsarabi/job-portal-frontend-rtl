import React from 'react';

//Modules and Libraries:
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

//CSS:
import styles from "/src/ProtectedRoute.module.css";

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get('token');

  if (!token) {
    return (
      <div className={styles.page}>
        <h1>Access Denied</h1>
        <p>You don't have the authority to see this page. Please <Link to="/login">log in</Link>.</p>
      </div>
    );
  }

  return element;
};

export default ProtectedRoute;
