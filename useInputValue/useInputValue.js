import { useState } from "react";

export const useInputValue = () => {
  
    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        InputValue,
        handleInputChange
    )
}
