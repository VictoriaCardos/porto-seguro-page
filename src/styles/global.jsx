import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --white-100: #FFFFFF;
    --white-150:#FEFEFE;
    --white-200: #FBFBFB;
    --yellow-50:#D0BC90;
    --yellow-100:#F3D38C;
    --yellow-200: #F8D074;
    --yellow-300: #EFC566;
    --yellow-400:  #F7B53D;
    --yellow-500:#ECC63C;
    --yellow-600: #E8BB15;
    --yellow-700: #D7A636;
    --yellow-750:#D6A430;
    --yellow-800: #9A6D0C;
    --gray-200:#C9C9C9;
    --gray-300:#BFBFBF;
    --gray-400:#A7A7A7;
    --gray-600:#8A8A8A;
    --gray-700:#707070;
    --gray-750:#4B4B4B;
    --gray-800:#404040;
    --black-700:#1A1A1A;
    --black-800: #171717;
    
  }
  *{
    margin:0;
    padding: 0;
  }
  html{
    @media(max-width: 1080px){
      font-size: 93.75% //15px
    }
    @media(max-width: 720px){
      font-size: 87.5% //15px
    } 
  }

  body{
    background-color: var(--white-200);
  }

  `
