import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --clr-purple: #635fc7;
    --clr-light-purple: #a8a4ff;
    --clr-black: #000112;
    --clr-dark-grey: #20212c;
    --clr-very-dark-grey: #2b2c37;
    --clr-dark-medium-grey: #3e3f4e;
    --clr-medium-grey: #828fa3;
    --clr-light-grey: #e4ebfa;
    --clr-very-light-grey: #f4f7fd;
    --clr-white: #ffffff;
    --clr-red: #ea5555;
    --clr-light-red: #ff9898;

    --ff-primary: "Plus Jakarta Sans", sans-serif;

    --fw-bold: 700;
    --fw-medium: 500;

    --fs-xl: 1.5rem;
    --fs-l: 1.125rem;
    --fs-m: 0.938rem;
    --fs-s: 0.813rem;
    --fs-xs: 0.75rem;

    --lh-xl: 1.875rem;
    --lh-l: 1.438rem;
    --lh-m: 1.188rem;
    --lh-s: 0.938rem;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
