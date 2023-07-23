import React, {useReducer} from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(action);

    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state - action.payload.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=" rounded-md border-2 w-[24%] mx-auto p-2 mt-4 border-rose-500 ">
      <div className="text-center mb-4">
        <p>Coutnt {state}</p>
      </div>
      <div className="text-white text-center">
        <button
          onClick={() => dispatch({type: "DECREMENT", payload: {count: 5}})}
          className="bg-red-500 mr-2 rounded-md p-1">
          Decrement
        </button>
        <button
          onClick={() => dispatch({type: "INCREMENT", payload: {count: 5}})}
          className="bg-green-600 rounded-md p-1">
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
