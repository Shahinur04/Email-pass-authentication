import React, { useState } from "react";

const SignUp = () => {

  const [email, setEmail] = useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    const email =event.target.email.value;
    const password =event.target.password.value;
    console.log(email,password)
  };
  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);
  };
  return (
    <div>
      <h2>If you new please register now</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="your email"
        />
        <br />
        <input
          onChange={handlePasswordBlur}
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
