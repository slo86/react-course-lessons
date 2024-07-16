export default function Tab({ isActive, onTabClick, children }) {
    return <button className={`tab${isActive ? ' tab--active' : ''}`} onClick={() => onTabClick()}>
        {children}
    </button>
}
