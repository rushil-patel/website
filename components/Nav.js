import styles from './Nav.module.css'
export default function Nav({navItems = [], title=''}) {
    return (
        <header>
            <nav className={styles['nav-bar']}>
                <span className={styles['nav-main']}>
                    {title}
                </span>
                <div className={styles['nav-items']}>
                    {navItems.map((item) => {
                        return (
                            <a className={styles['nav-item']} key={item} >
                                {item}
                            </a>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}