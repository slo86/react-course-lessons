import styles from './Tabs.module.css';
import classNames from 'classnames';

export default function Tab({isActive, onTabClick, children}) {
    return <button
        className={classNames(styles.tab, {[styles['tab--active']]: isActive})}
        onClick={() => onTabClick()}
    >
        {children}
    </button>
}
