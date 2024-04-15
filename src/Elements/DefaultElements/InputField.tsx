import { useState } from "react";


function InputField({ startText = '' }) {
    const [inputValue, setInputValue] = useState(startText);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 15) {
            setInputValue(event.target.value);
        }
    };

    return (
        <div>
            <input className="text-center rounded-full"
                type="text"
                id="inputField"
                value={inputValue}
                onChange={handleChange}
                maxLength={15}
            />
        </div>
    );
}

export default InputField;