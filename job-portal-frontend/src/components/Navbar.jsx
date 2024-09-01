import React, { useState, useEffect } from 'react';

//Modules andLibraries:
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// APIs:
import { checkLoginStatus } from '/src/apis/checkLoginStatus';

// Components:
import Icon from "/src/icons/Icon";

// CSS:
import styles from "/src/styles/Navbar.module.css";

const Navbar = () => {
    // States:
    const [loggedIn, setLoggedIn] = useState(false);
    const [show, setShow] = useState(false);

    // Functions:
    useEffect(() => {
        loginCheck();
    }, []);

    // Checking if the user is logged in:
    const loginCheck = async () => {
        const response = await checkLoginStatus();
        if (response.status === "success") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        };
    };

    // Handle showing more profile related items:
    const showHandler = () => {
        setShow(prev => !prev);
    };

    //Handle logging out of the account:
    const logoutHandler = () => {
        Cookies.remove("token");
        setShow(false);
        loginCheck();
    };

    return (
        <div className={styles.navContainer}>
            <nav className={styles.navbar}>
                <ul>
                    <div>
                        <li className={styles.home}>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className={styles.about_us}>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li className={styles.add}>
                            <Link to="/add-job">Add a Position</Link>
                        </li>
                    </div>
                    <div className={styles.profileContainer}>
                        {
                            loggedIn ? 
                            <li className={styles.profile} onClick={showHandler}>
                                <Icon icon="account-circle-1" color="#ffffff" width="24px" height="24px" />
                            </li>
                            :
                            <li className={styles.login}>
                                <Link to="/signup">Sign Up</Link>/<Link to="/login">Login</Link>
                            </li>
                        }
                        {show && (
                            <ul className={styles.dropDown}>
                                <li>
                                    <Link to="/profile">My Profile</Link>    
                                </li>
                                <li>
                                    <Link to="/jobs-uploaded">My Jobs</Link>
                                </li>
                                <li>
                                    <Link>Messages</Link>
                                </li>
                                <li onClick={logoutHandler}>
                                    Logout
                                </li>
                            </ul>
                        )}
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
