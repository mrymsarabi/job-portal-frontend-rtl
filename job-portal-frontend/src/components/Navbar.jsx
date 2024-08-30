import React, { useState, useEffect } from 'react';

//APIs:
import { checkLoginStatus } from '/src/apis/checkLoginStatus';

//CSS:
import styles from "/src/styles/Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    //States:
    const [loggedIn, setLoggedIn] = useState(false);

    //Functions:
    useEffect(() => {
        loginCheck();
    }, []);

    //Checking if the user is logged in:
    const loginCheck = async() => {
        const response = await checkLoginStatus();
        if(response.status === "success") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        };
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
                    <div>
                        <li className={styles.login}>
                            <Link to="/signup">Sign Up</Link>/<Link to="/login">Login</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;