export default function Counter({ value, increase, decrease}) {
    return (
        <div className='counter'>
            <button className='counter__decrease-btn' onClick={decrease}>-</button>
            <div className='counter__value'>{value}</div>
            <button className='counter__increase-btn' onClick={increase}>+</button>
        </div>
    )
}
