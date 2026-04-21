import styles from './Navbar.module.css'
export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h3>SHAADI.com</h3>
            </div>
            <div className={styles.elems}>
                <a href="#">About Us</a>
                <a href="#">Help</a>
                <button>Login</button>
            </div>
        </nav>
    )
}