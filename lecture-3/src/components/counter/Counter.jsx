import styles from './Counter.module.css';

export default function Counter({value, increase, decrease}) {
    return (
        <div className={styles.counter}>
            <button className={styles['counter__decrease-btn']} onClick={decrease}>-</button>
            <div className={styles['counter__value']}>{value}</div>
            <button className={styles['counter__increase-btn']} onClick={increase}>+</button>
        </div>
    )
}
