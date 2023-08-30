import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.png';
import favBtn from '../../images/favs.png';
const Navbar = () => {
  const { loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="AUTODIM" />
      </Link>
      <div className={styles.navbar_btns}>
        <Link to="/favorites" className={styles.favBtn}>
          <img src={favBtn} alt="favs" />
        </Link>
        {user ? (
          <div className={styles.user_container}>
            <h2>{user.nickname}</h2>
            <button onClick={() => logout()} className={styles.login__btn}>
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className={styles.login__btn}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
