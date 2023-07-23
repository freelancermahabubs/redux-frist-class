import React, {useReducer} from "react";

const LogForm = () => {
  const initailState = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    education: "",
    quantity: 0,
    feedback: "",
    terms: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "INCREMENT":
        return {
          ...state,
          quantity: state.quantity + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          quantity: state.quantity - 1,
        };

      case "TOGGLE":
        return {
          ...state,
          terms: !state.terms,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initailState);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="mx-auto w-1/2 mt-16 rounded-md shadow-md border-2 border-b-purple-400">
      <h1 className="text-2xl text-center font-bold mb-4">User Information</h1>
      <form onSubmit={submit} className="grid grid-cols-2 gap-4 p-4">
        <label htmlFor="firstName" className="block">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: {name: e.target.name, value: e.target.value},
            })
          }
          required
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="lastName" className="block">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: {name: e.target.name, value: e.target.value},
            })
          }
          required
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        />

        <label htmlFor="gender" className="block col-span-2">
          Gender:
        </label>
        <div className="space-x-4 col-span-2">
          <label htmlFor="male" className="inline-flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onClick={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: {name: e.target.name, value: e.target.value},
                })
              }
              required
              className="form-radio focus:ring focus:border-blue-300"
            />
            <span className="ml-2">Male</span>
          </label>
          <label htmlFor="female" className="inline-flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onClick={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: {name: e.target.name, value: e.target.value},
                })
              }
              required
              className="form-radio focus:ring focus:border-blue-300"
            />
            <span className="ml-2">Female</span>
          </label>
          <label htmlFor="other" className="inline-flex items-center">
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onClick={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: {name: e.target.name, value: e.target.value},
                })
              }
              required
              className="form-radio focus:ring focus:border-blue-300"
            />
            <span className="ml-2">Other</span>
          </label>
        </div>

        <label htmlFor="email" className="block col-span-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: {name: e.target.name, value: e.target.value},
            })
          }
          required
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 col-span-2"
        />

        <label htmlFor="education" className="block col-span-2">
          Education:
        </label>
        <select
          id="education"
          name="education"
          onChange={(e) =>
            dispatch({
              type: "INPUT",
              payload: {name: e.target.name, value: e.target.value},
            })
          }
          required
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 col-span-2">
          <option value="">Select Education</option>
          <option value="high_school">High School</option>
          <option value="associate">Associate's Degree</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="doctorate">Doctorate Degree</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="num_of_pcs" className="block col-span-2">
          Number of PCs:
        </label>
        <div className="flex items-center space-x-2 col-span-2">
          <button
            type="button"
            onClick={() => dispatch({type: "DECREMENT"})}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            -
          </button>
          <span className="block w-full text-center border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
            {state.quantity}
          </span>
          <button
            type="button"
            onClick={() => dispatch({type: "INCREMENT"})}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            +
          </button>
        </div>
        <label htmlFor="feedback" className="block col-span-2">
          Feedback:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: {name: e.target.name, value: e.target.value},
            })
          }
          className="block w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 col-span-2"
          rows="4"></textarea>

        <div className="col-span-2">
          <label htmlFor="terms" className="inline-flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onClick={() => dispatch({type: "TOGGLE"})}
              required
              className="form-checkbox h-5 w-5 text-blue-600 focus:ring focus:border-blue-300"
            />
            <span className="ml-2">I agree to the terms and conditions</span>
          </label>
        </div>
        <button
          type="submit"
          disabled={!state.terms}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogForm;
