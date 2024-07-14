import Counter from "./Counter.jsx";

export default function Restaurant({ data }) {
    return (
        <div className='restaurant'>
            <h2>{data.name}</h2>
            <h3>Menu</h3>
            <ul className='restaurant__menu'>
                {data.menu.map((menuItem) => (
                    <li className='restaurant__menu-item' key={menuItem.id}>
                        {menuItem.name}
                        <Counter/>
                    </li>
                ))}
            </ul>
            <h3>Reviews</h3>
            <ul className='restaurant__reviews'>
                {data.reviews.map((menuItem) => (
                    <li className='restaurant__reviews-item' key={menuItem.id}>{menuItem.user} - {menuItem.text}</li>
                ))}
            </ul>
        </div>
    )
}
