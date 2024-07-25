import styles from './Counter.module.css';

export default function Counter({value, readonly = false, increase, decrease}) {
    return (
        <div className={styles.counter}>
            {!readonly && (
                <button className={styles.decreaseBtn} onClick={decrease}>-</button>
            )}
            <div>{value}</div>
            {!readonly && (
                <button className={styles.increaseBtn} onClick={increase}>+</button>
            )}
        </div>
    )
}
