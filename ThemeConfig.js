import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    cursor: ${({ theme }) => theme.cursor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.20s linear;
  }
`
