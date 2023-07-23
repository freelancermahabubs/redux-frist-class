import {useContext} from "react";
import {COUNTER_CONTEXT} from "../App";

const Child = () => {
  const {count, setCount} = useContext(COUNTER_CONTEXT);
  return (
    <div className=" rounded-md border-2 w-[24%] mx-auto p-2 mt-4 border-rose-500 ">
      <div className="text-center mb-4">
        <p>Coutnt {count}</p>
      </div>
      <div className="text-white text-center">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 mr-2 rounded-md p-1">
          Decrement
        </button>
        <button
          onClick={() => setCount((prvState) => prvState + 1)}
          className="bg-green-600 rounded-md p-1">
          Increment
        </button>
      </div>
    </div>
  );
};

export default Child;
