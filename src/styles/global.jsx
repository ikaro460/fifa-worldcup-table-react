import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  //GLOBAL COLOR PALETTE
  
  :root {
        --background-blue: #e9ecf5;
        --post-white: #fff;
        --title-blue: #29325D;
        --text-grey: #666;
        --button-grey: #e8e8e8;
        --purple-1: #6c80be
    }
  
  body{
    color: var(--post-white);
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-family: sans-serif, "Source Sans Pro";
    background-image: url("https://img.freepik.com/premium-vector/world-cup-2022-qatar-background_342897-15.jpg?w=2000");
  }
  .App {
    padding: 25px;
  }
  .App-header {
    display:flex;
    flex-direction: column;
    align-items: center;
}
`;
