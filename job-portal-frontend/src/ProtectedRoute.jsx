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
        <h1>اجازه دسترسی ندارید.</h1>
        <p>شما اجازه دیدن این صفحه را ندارید. برای دین این صفحه لطفا<Link to="/login">وارد</Link>شوید.</p>
      </div>
    );
  }

  return element;
};

export default ProtectedRoute;
