import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState([]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  return (
    <div>
      <h2>If you new please register now</h2>
      <form>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="your email"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="your password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;
