import React from "react";

import "./sign-in-and-sign-up.styles.scss";

import Signin from "../../components/sign-in/Sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
