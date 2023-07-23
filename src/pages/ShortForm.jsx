import React, {useState} from "react";

const ShortForm = () => {
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(data);
  };
  return (
    <div className="mx-auto w-1/2 mt-24  border-2 border-orange-100  shadow-xl">
      <form onSubmit={submit} className="p-4">
        <div className="grid grid-cols-1">
          <label>Frist Name</label>
          <input
            onBlur={(e) => setFristName(e.target.value)}
            className="bg-gray-100"
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="grid grid-cols-1">
          <label>Last Name</label>
          <input
            onBlur={(e) => setLastName(e.target.value)}
            className="bg-gray-100"
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="grid grid-cols-1">
          <label>Email</label>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            className="bg-gray-100"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="grid grid-cols-1">
          <label>Password</label>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            className="bg-gray-100"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className=" mt-2 bg-orange-100 rounded-md p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
