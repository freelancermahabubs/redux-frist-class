import {createContext, useState} from "react";
import ShortForm from "./pages/ShortForm";
import Counter from "./pages/Counter";
import LogForm from "./pages/LogForm";

// export const COUNTER_CONTEXT = createContext();

// import Parent from "./pages/Parent";

function App() {
  // const [count, setCount] = useState(0);
  // const value = {count, setCount};

  return (
    // <COUNTER_CONTEXT.Provider value={value}>
    //   <div>
    //     <Parent />
    //   </div>
    // </COUNTER_CONTEXT.Provider>
    // <ShortForm />
    // <Counter />
    <LogForm />
  );
}

export default App;
