import styled from "styled-components";

export const WelcomeWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
min-height: 100vh;
text-align: center;
background-image: url("/images/bgwelcome.png");
`

export const WelcomeContent = styled.div`
position: relative;
align-items: center;
justify-content: center;
display: flex;
`

export const WelcomeTitle = styled.h1`
position: relative;
align-items: center;
justify-content: center;
display: flex;
font-family: 'Modak';
weight: 400, regular;
font-size: 50px;
background: linear-gradient(94.9deg, #FFE4C4 19.79%, #FECA7D 49.29%, #FF8A00 87.96%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

`

export const WelcomeBtn = styled.button`
border-radius: 20px;
width: 100px;
height: 40px;
background-color: rgba(255, 255, 255, 0.2);
font-weight: bold;
color: white;
border: 0 none;
cursor: pointer;
padding: 10px 5px;
margin: 10px 5px;

&:hover {
    background-color: transparent;
    border: 2px solid #fd9a89;
  }
`
