import React from "react";
import { Link } from "react-router-dom";

import {
  WelcomeWrapper,
  WelcomeContent,
  WelcomeTitle,
  WelcomeBtn
} from "WelcomeStyles";

export const WelcomePage = () => {
  return (
  <WelcomeWrapper>
      <WelcomeContent>
    <header>
    <WelcomeTitle>
      <h1>Sports Quiz</h1>
      </WelcomeTitle>
      <Link to="/quiz">
      <WelcomeBtn>
        Start Quiz!
      </WelcomeBtn>
      </Link>
    </header>
    </WelcomeContent>
  </WelcomeWrapper>
  )
};