export default function Tab({ value, active, children, onTabClick }) {
    return <button className={`tab${active ? ' tab--active' : ''}`} onClick={() => onTabClick(value)}>
        {children}
    </button>
}
