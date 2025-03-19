import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply custom styles to match the design reference
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #225260;
    --color-secondary: #5B412A;
    --color-white: #FFFFFF;
    --color-accent: #DDD6CC;
    --color-light: #F8F8F8;
    
    --font-sans: 'Poppins', sans-serif;
    --font-serif: 'Playfair Display', serif;
  }
  
  body {
    font-family: var(--font-sans);
    color: #333;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
  }
`;

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
