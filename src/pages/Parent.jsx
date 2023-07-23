import React, {useContext} from "react";
import Child from "./Child";
import {COUNTER_CONTEXT} from "../App";

const Parent = () => {
  const {count, setCount} = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div className=" rounded-md border-2 w-[24%] mx-auto p-2 mt-4 border-blue-500 ">
        <div className="text-center mb-4">
          <p>Pernet {count}</p>
        </div>
      </div>
      <Child />
    </div>
  );
};

export default Parent;
