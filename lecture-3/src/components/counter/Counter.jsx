import styles from './Counter.module.css';

export default function Counter({value, increase, decrease}) {
    return (
        <div className={styles.counter}>
            <button className={styles.decreaseBtn} onClick={decrease}>-</button>
            <div>{value}</div>
            <button className={styles.increaseBtn} onClick={increase}>+</button>
        </div>
    )
}
