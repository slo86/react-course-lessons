import ReviewCounter from "../counter/ReviewCounter.jsx";
import {useForm} from "./hooks.js";

export default function RestaurantReviewForm({}) {
    const {form, updateName, updateText, updateRating, clear} = useForm();
    const {name, text, rating} = form;

    return (
        <div className='restaurant-review-form'>
            <div>
                <div>Name</div>
                <input value={name} onChange={e => updateName(e.target.value)} type="text"/>
            </div>
            <div>
                <div>Text</div>
                <textarea value={text} onChange={e => updateText(e.target.value)}/>
            </div>
            <div>
                <div>Rating</div>
                <ReviewCounter value={rating} min={1} onChange={value => updateRating(value)}/>
            </div>
            <div>
                <button onClick={clear}>Submit</button>
            </div>
        </div>
    )
}
