import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import bgimage from "../../public/background-image.jpg"


const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html:focus-within {
        scroll-behavior: smooth;
    }
    ul,
    ol {
        list-style: none;
    }
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    html {
        font-size: 16px;
    }
    body {
        font-family: ${theme.fonts.primary};
        counter-reset: tab;
        background-image: url(${bgimage});
        background-size: cover;
    }
    a {
        text-decoration: none;
    }
`

const Provider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>{}
            {children}
        </ThemeProvider>
    )
}

export default Provider;