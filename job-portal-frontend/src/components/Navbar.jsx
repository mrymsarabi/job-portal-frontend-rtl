import React from 'react';

//CSS:
import styles from "/src/styles/Navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navbar}>
                <ul>
                    <div>
                        <li className={styles.home}>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className={styles.about_us}>
                            <Link>About Us</Link>
                        </li>
                        <li className={styles.add}>
                            <Link>Add a Position</Link>
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