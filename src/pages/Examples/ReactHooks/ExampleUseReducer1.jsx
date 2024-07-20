import React, { useReducer } from "react";

// Reducer function
const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return { ...state, name: action.payload };
        case "UPDATE_AGE":
            return { ...state, age: action.payload };
        default:
            return state;
    }
};

// Initial state
const initialState = { name: "", age: 0 };

const FormComponent = () => {
    // Using useReducer
    const [state, dispatch] = useReducer(formReducer, initialState);

    // Handlers
    const handleNameChange = (e) => {
        dispatch({ type: "UPDATE_NAME", payload: e.target.value });
    };

    const handleAgeChange = (e) => {
        dispatch({ type: "UPDATE_AGE", payload: parseInt(e.target.value, 10) });
    };

    return (
        <div>
            <input
                type="text"
                value={state.name}
                onChange={handleNameChange}
                placeholder="Name"
            />
            <input
                type="number"
                value={state.age}
                onChange={handleAgeChange}
                placeholder="Age"
            />
            <div>
                <p>Name: {state.name}</p>
                <p>Age: {state.age}</p>
            </div>
        </div>
    );
};

export default FormComponent;
