import styles from './Header.module.css'

import igniteLogo from '../images/ignite simbol.svg'


export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo ignite" />
        </header>
    )
}