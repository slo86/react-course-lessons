import Counter from "./Counter.jsx";

export default function ReviewCounter({value, min = 0, max = 5, onChange}) {
    return (
        <Counter
            value={value}
            increase={() => {
                if (value < max) {
                    onChange(value + 1);
                }
            }}
            decrease={() => {
                if (value > min) {
                    onChange(value - 1);
                }
            }}
        />
    )
}
